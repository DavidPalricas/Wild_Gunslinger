let CONFIG = [{"bullets": 6}]

let ENV_OBJECTS = [ {"plane":[15, 0, 0]},
                 {"tree":[310, 0, 80],"scale":1.2},
                 {"tree":[80, 0, 80],"scale":1.3},
                {"rock":[290, 0, 50],"scale":1.5},
                {"lake":[200, 1, 80]},
                {"tree":[82, 0, 10],"scale":1.4},
                {"tree":[100, 0, -30],"scale":0.8},
                {"tree":[200, 0, -30],"scale":1.5},
                {"rock": [140,0,-30],"scale":2},
                {"tree":[310, 0, -30],"scale":1.1},
                {"rock":[60, 0, -30],"scale":1.3},
                {"tree":[45, 0, -70],"scale":1.1},
                {"rock":[30, 0, -60],"scale":1},
                {"tree":[150, 0, -90],"scale":1.2},
                {"tree":[100, 0, -120],"scale":1.3},
                {"rock":[140, 0, -120],"scale":2.5},
                {"bush":[100, 0, 0],"scale":1.5},  
                {"bush":[40, 0, 70],"scale":1.2},
                {"bush":[80, 0, -70],"scale":1.3},
                {"bush":[100, 0, 50],"scale":1.4},
                {"tree":[300, 0, 120],"scale":1.3},
                {"rock":[280, 0, 120],"scale":1.5},
                {"tree":[200, 0, 160],"scale":1.2},
                {"rock":[180, 0, 160],"scale":1.5},
                {"bush":[240, 0, 140],"scale":2},
                {"tree":[320, 0, 170],"scale":1.3},];

let ANIMALS= [{"duck":[50,25, 0]},
                {"fox":[120, 0, 50]},
                {"boar":[300, 0, -100]},
                {"duck":[40, 25, 80]},]




const LEVEL1 = [CONFIG,ENV_OBJECTS, ANIMALS];


ANIMALS = [ANIMALS[0],ANIMALS[1]]


ENV_OBJECTS  = [ {"plane":[15, 0, 0]},
                {"rock":[290, 0, 50],"scale":1.5},
                {"rock": [140,0,-30],"scale":2},
                {"rock":[60, 0, -30],"scale":1.3},
                {"rock":[30, 0, -60],"scale":1},
                {"rock":[140, 0, -120],"scale":2.5},
                {"rock":[280, 0, 120],"scale":1.5},
                {"rock":[180, 0, 160],"scale":1.5},];

CONFIG = [{"bullets": 4}]

const LEVEL2 = [CONFIG,ENV_OBJECTS, ANIMALS];




export const MAP = [LEVEL1,LEVEL2];

