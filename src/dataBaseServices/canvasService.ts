import { FirebaseDBService, IDBService } from './firebaseDBServices'

export type typePaint = {
  picture: string | undefined
  user: string | undefined
}

export type typePaints = typePaint[]

interface ICanvasService {
  dataBase: IDBService<typePaints>
  key: string
  getPData(): Promise<typePaints>
  setData(paint: typePaint, paints: typePaints): Promise<typePaints>
}

class CanvasService implements ICanvasService {
  dataBase
  key

  constructor(dataBase: IDBService<typePaints>) {
    this.dataBase = dataBase
    this.key = 'paints'
  }

  async getPData(): Promise<typePaints> {
    const response = await this.dataBase.getData(this.key)
    return response
  }

  async setData(paint: typePaint, paints: typePaints): Promise<typePaints> {
    const changedPaints = paints ? [paint, ...paints] : [paint]
    const response = await this.dataBase.setData(changedPaints, this.key)
    return response
  }
}

export const canvasService = new CanvasService(new FirebaseDBService())
