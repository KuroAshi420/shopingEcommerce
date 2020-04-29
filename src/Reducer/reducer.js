const initialState = {
    item: [
      {
        quantity: 0,
        id: 1,
        link:
          "https://images-na.ssl-images-amazon.com/images/I/61nlT53kRKL._AC_SY445_.jpg",
        name: "phone1",
        categorie: "smart-phone",
        price: 1000
      },
      {
        quantity: 0,
        id: 2,
        link:
          "https://www.journaldugeek.com/content/uploads/2020/03/iphone-12-pro-rendu-3d-blanc-noir-2.jpg",
        name: "phone xx20",
        categorie: "smart-phone",
        price: 2500
      },
      {
        quantity: 0,
        id: 3,
        link:
          "https://www.technopro-online.com/34502-large_default/seche-cheveux-beurer-2200-watt-noir-hc30.jpg",
        name: "sechoir",
        categorie: "beauté",
        price: 600
      },
      {
        quantity: 0,
        id: 4,
        link:
          "https://www.parfumdo.com/31235-large_default/l-interdit-eau-de-parfum-vaporisateur.jpg",
        name: "parfum",
        categorie: "beaté",
        price: 800
      },
      {
        quantity: 0,
        id: 5,
        link:
          "https://www.warda.tn/sites/default/files/2019-10/xfarine-patissiere-flottant.png.pagespeed.ic.jbdAPKp4ZD.png",
        name: "farine",
        categorie: "alimentaire",
        price: 5
      },
      {
        quantity: 0,
        id: 6,
        link:
          "https://lh3.googleusercontent.com/proxy/B_ngdGidGV2L38fU9oyPQhRhW0mvqdlCIuP6nsYL3LqxujHVu8y62QRndDrr_35r1Mq4nDV-qB43pUgHjOZAyWw57oIRzTCxETRcjizhnq1n-as9H1dOupii7HDckzwD9Xz_qJhYtj0M",
        name: "semoule",
        categorie: "alimentaire",
        price: 10
      },
      {
        quantity: 0,
        id: 7,
        link:
          "https://lh3.googleusercontent.com/proxy/o_FKOrb5r3e598F2pxRekvBCBdkVz8QUP45Mv_oCbdhXgUWNlvf18ve_6nsPGLoJh8Q2Zbhdz0yaELHuqTVAtDCKi7m21BbF3XiPQdyV8CLtZIOo2uMtpp65fjk1dZX5seD2",
        name: "lilas anti tache",
        categorie: "alimentaire",
        price: 9
      }
      
    ],
    panier: []
  };
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ARTICLE":
        return { ...state, panier: [...state.panier, action.payload] };
      case "INCREMENT_QUANTITY":
        return {
          ...state,
          panier: state.panier.map(item =>
            item.id === action.payload.id
              ? { ...action.payload, quantity: item.quantity + 1 }
              : item
          )
        };
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          panier: state.panier.map(item =>
            item.id === action.payload.id
              ? { ...action.payload, quantity: item.quantity - 1 }
              : item
          )
        };
        case "DELETE_ARTICLE" :
            return {...state,panier : state.panier.filter((el,index)=> (el.id!==action.payload))}
        case "SEARCH_ARTICLE" :
            return {...state,item : state.item.filter((el, index) => (el.name === action.payload||el.categorie === action.payload ) && el)}
        case "DELETE_ALL" :
            return {...state,panier :[]}
      default:
        return state;
    }
  }