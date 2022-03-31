import logo from './logo.svg';
import './App.css';
import React from "react";

import GraphVisualization from 'react-graph-viz-engine'

export const App = () => {
  return <GraphVisualization
    data={{
      data: {
        actors: [
          {
            ID: 1,
            __typename: 'Actor',
            acted_in: [
              {
                ID: 3,
                __typename: 'Movie',
                genres: [
                  {
                    ID: 5,
                    __typename: 'Genre',
                    name: 'Action'
                  },
                  {
                    ID: 6,
                    __typename: 'Genre',
                    name: 'Adventure'
                  }
                ],
                title: 'Trip to the Moon, A (Voyage dans la lune, Le)'
              }
            ],
            name: 'François Lallement'
          },
          {
            ID: 2,
            __typename: 'Actor',
            acted_in: [
              {
                ID: 3,
                __typename: 'Movie',
                genres: [
                  {
                    ID: 7,
                    __typename: 'Genre',
                    name: 'Sci-Fi'
                  }
                ],
                title: 'Trip to the Moon, A (Voyage dans la lune, Le)'
              }
            ],
            name: 'Jules-Eugène Legris'
          }
        ]
      }
    }}
    layout="graph"
    renderer="cytoscape"
    showNavigator
  />;
}

export default App;
