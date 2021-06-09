import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }


  public set(key: string, value: any) {
    if (this._storage.get(key)) {
      this._storage.remove(key);
    }
    this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    try {
      const result = await this._storage.get(key);
      if (result != null) {
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }

  public clearAllStoredData() {
    this._storage?.clear();
  }
  public remove(key: string) {
    this._storage?.remove(key);
  }
}
