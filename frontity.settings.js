const settings = 
[  
  {
    "name": "norwegian",
    "state": {
      "frontity": {
        "url": "https://aamodtgroup2.vercel.app",
        "title": "Aamodt Group",
        "description": "Konsulenter innen utvikling og drift"
      },
      "theme": {
        "menuUrl": "menu",
        "lang": "nb"
      }
    },
    "packages": [
      {
        "name": "@aamodtgroup/agtech",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://alejandro.inmo.cloud/multilenguage/",
            "homepage": "/homepage",
            "params": {
              "lang": "es",
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  },
  {
    "name": "english",
    "match": [".*localhost:3000\/en(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://aamodtgroup2.vercel.app/en/",
        "title": "Aamodt Group",
        "description": "Consultants within development and operations"
      },
      "theme": {
        "menuUrl": "menu-en",
        "lang": "en"
      }
    },
    "packages": [
      {
        "name": "@aamodtgroup/agtech",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://alejandro.inmo.cloud/multilenguage/en/",
            "subdirectory": "/en",
            "homepage": "/homepage",
            "params": {
              "lang": "en",
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  }
];

export default settings;