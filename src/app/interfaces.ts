
interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}
interface Competition{
    id: number;
    name: string;
    code: string;
    type: string
    emblem: string;
}

interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: any;
}

interface Team {
    id: number
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

interface Score {
    winner: any;
    duration: string;
    fullTime: any;
    halfTime: any;
}
interface Odds {
    msg:string;
}

export interface Match {
    area:Area;
    competition: Competition;
    season:Season;
    id: number;
    utcDate: string;
    status: string;
    matchday:number;
    stage: number;
    group: any;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam:Team;
    score: Score;
    odds: Odds;
    referees: any
}
    