import { Client, ClientOptions, Options } from 'discord.js'
interface MuffetOptions extends ClientOptions {
  token: string
}

export default class MuffetClient extends Client {
  muffetOptions: MuffetOptions;
  constructor(muffetOptions: MuffetOptions) {
    super(muffetOptions)
    this.muffetOptions = muffetOptions
  }

  async init(): Promise<void> {
    await this.login(this.muffetOptions.token)
  }
}