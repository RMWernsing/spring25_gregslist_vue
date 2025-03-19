export class Job {
  constructor(data) {
    this.company = data.company
    this.createdAt = new Date(data.createdAt)
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.description = data.description
    this.hours = data.hours
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.rate = data.rate
  }
}