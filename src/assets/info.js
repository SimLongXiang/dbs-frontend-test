 import image1 from './illustration1.JPG'
 import image2 from './illustration2.JPG'
 import image3 from './illustration3.JPG'

 export const data = [
    {
      "uuid": 1,
      "image": image1,
      "title": "At age 35",
      "description": "Peter and his wife, Jane got a home loan for their new home. He buys eDecreasingTerm that matches his home loan.",
      "home-loan": {
        "home-loan": 500000,
        "loan-tenure": 25,
        "interest": 3
      },
      "policy-loan": {
        "coverage": 500000,
        "policy-term": 25,
        "decreasing": 3
      }
    },
    {
      "uuid": 2,
      "image": image2,
      "title": "During the policy term",
      "description": "Every month, Peter pays a premium of $31 for this policy. The coverage amount decreases at the same rate as his home loan.",
      "home-loan": {
        "home-loan": 486286,
        "loan-tenure": 23,
        "interest": 3
      },
      "policy-loan": {
        "coverage": 486286,
        "policy-term": 23,
        "decreasing": 3
      }
    },
    {
      "uuid": 3,
      "image": image3,
      "title": "At age 40",
      "description": "He is unfortunately diagnosed with a terminal illness. Jane can use the lumpsum payout from this policy to pay off their outstanding home loan.",
      "payout": {
        "outstanding": 442626,
        "lumpsum": 442626
      }
    }
  ]