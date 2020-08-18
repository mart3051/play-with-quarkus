/**
 * Fight API
 * This API allows a hero and a villain to fight
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * The hero fighting against the villain
 */
export class Hero {
  constructor(
    public name?: string,
    public picture?: string,
    public powers?: string,
    public level?: bigint
) {
}
}
