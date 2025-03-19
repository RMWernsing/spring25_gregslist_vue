export class House {
  constructor(data) {
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.description = data.description
    this.id = data.id
    this.levels = data.levels
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl

  }
}