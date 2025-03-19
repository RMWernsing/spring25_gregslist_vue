import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Job } from "@/models/Job.js"

class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    logger.log('here are your jobs', response.data)
    const jobs = response.data.map(pojo => new Job(pojo))
    AppState.jobs = jobs
  }

}

export const jobsService = new JobsService()