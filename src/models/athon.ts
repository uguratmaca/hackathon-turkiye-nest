import { EventType } from "./event-type";
import { Tag } from "./tag";

export interface Athon {
    name: string;
    slug: string;
    starts_at: Date;
    deadline: Date;
    ends_at: Date;
    location: string;
    tags: Array<Tag>;
    description: string;
    thumbnail: string;
    etype: EventType;
  }