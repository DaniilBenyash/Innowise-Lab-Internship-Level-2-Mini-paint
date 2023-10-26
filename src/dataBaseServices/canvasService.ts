import { FirebaseDBServices, IFirebaseDBServices } from './firebaseDBServices'

export type typePaint = {
  picture: string | undefined
  user: string | undefined
}

export type typePaints = typePaint[]

interface ICanvasService {
  dataBase: IFirebaseDBServices<typePaints>
  key: string
  getPaints(): Promise<typePaints>
  setPaint(paint: typePaint, paints: typePaints): Promise<typePaints>
}

class CanvasService implements ICanvasService {
  dataBase
  key

  constructor(dataBase: IFirebaseDBServices<typePaints>) {
    this.dataBase = dataBase
    this.key = 'paints'
  }

  async getPaints(): Promise<typePaints> {
    const response = await this.dataBase.getPaints(this.key)
    return response
  }

  async setPaint(paint: typePaint, paints: typePaints): Promise<typePaints> {
    const changedPaints = paints ? [paint, ...paints] : [paint]
    const response = await this.dataBase.setPaint(changedPaints, this.key)
    return response
  }
}

export const canvasService = new CanvasService(new FirebaseDBServices())
