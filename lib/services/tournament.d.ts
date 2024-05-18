/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ITournament } from "../db/models/tournament";
declare const _default: {
    createTournament: (tournament: ITournament) => Promise<import("mongoose").FlattenMaps<ITournament & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>>;
    getTournaments: (options: object) => Promise<ITournament[]>;
    getTournamentById: (id: import("mongoose").Schema.Types.ObjectId) => Promise<ITournament | null>;
    updateTournamentById: (id: import("mongoose").Schema.Types.ObjectId, options: object) => Promise<(import("mongoose").Document<unknown, {}, ITournament> & ITournament & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>) | null>;
};
export default _default;
