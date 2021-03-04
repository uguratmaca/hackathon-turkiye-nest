import axios from "axios";
import { server } from '../helper'
import { Injectable } from '@nestjs/common';
import { AthonRes } from "src/models/athon-res";

@Injectable()
export class AthonsService {

    async getAllAthons() : Promise<AthonRes> {
        const response: AthonRes = await axios.get(server.baseURL + 'events/?limit=100&order_by=deadline&status=future')
        return response;
    }
}
