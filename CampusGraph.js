//Daniel Davis, CampusGraph, a graph of certain buildings on sjc campus. Used for answering Algorthims in Operations question number 2//

load("Graph.js");

Campus = new graph(6); // creating a graph of campus with 6 of the most well known buildings including my current residence
Campus.addEdge(0,1); // From apartments to Halleck
Campus.addEdge(0,6); // From apartments to chapel
Campus.addEdge(1,2); // from halleck to core
Campus.addEdge(1,6); // From halleck to chapel
Campus.addEdge(2,3); // From core to science
Campus.addEdge(2,4); // from core to rec center
Campus.addEdge(2,6); // from core to chapel
Campus.addEdge(3,4); // from science to rec center
Campus.addEdge(3,5); // from science to computer science
Campus.addEdge(5,6); // from computer center to Chapel
Campus.showGraph(); // displays connections. there are two shortests paths that take 2 movements to get from apartments to core, but there are actually quite a lot of different routes to get from my room to the core building
