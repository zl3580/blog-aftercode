import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
    * @param name - your name
   */
  // public async sayHi(name: string) {
  //   return `hi, ${name}`;
  // }
  async sayHi(params) {
    const { ctx } = this;
    console.log('ctx-------17-------------------', ctx.model);
    const result = await ctx.model.Test.create(params);
    return result;
  }
}
