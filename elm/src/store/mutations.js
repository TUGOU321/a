export default{
  latA(state,a){
    state.latA=a;
  },
  lonA(state,a){
    state.lonA=a;
  },
  foodName(state,a){
    state.foodName=a;
  },
  increAdd(state,a){
    state.id = a;
  },
  search1(state,b,c){
    state.latitude = b;
  },
  search2(state,c){
    state.longitude =c;
  },
  getUsersData(state,a){
    state.userData = a;
},
getUserName(state,a){
    state.userName = a;
},
setUserAddress(state,a){
    state.userAddress = a;
},
foundAddress(state,a){
    state.foundAddress = a;
},
serviceCenterinfo(state,a){
    state.serviceCenterinfo = a;
},
boll(state,a){
    state.boll = a;
},
boll2(state,a){
    state.boll2 = a;
},
    getL(state,a){
      this.state.Dlat=a;
    },
    getN(state,a){
      this.state.Dlon=a;
    },
    getcanguanId(state,v){
        this.state.shopID=v;
    },
    foods(state, a) {//state是必须参数
        if (state.allFoods.length > 0 && state.shopID == state.allFoods[0].foods[0].restaurant_id) {
          return;
        }
        state.allFoods = a;
      },
      getindex(state, obj) {//state是必须参数
        state.allFoods[obj.a].foods[obj.b].is_featured += 1;
        state.totalPrice += state.allFoods[obj.a].foods[obj.b].specfoods[0].price;
      },
      getdele(state, obj) {//state是必须参数
       if(state.allFoods[obj.a].foods[obj.b].is_featured>0){
        state.allFoods[obj.a].foods[obj.b].is_featured -= 1;
       }
        if (state.allFoods[obj.a].foods[obj.b].is_featured == 0) {
          state.allFoods[obj.a].foods[obj.b].is_featured = 0;
        };
        state.totalPrice -= state.allFoods[obj.a].foods[obj.b].specfoods[0].price;
        if(state.totalPrice==0){
          state.totalPrice=0;
        }
      },
      goujia(state,b){
        for(var i=0;i<state.allFoods.length;i++){
          for(var k=0;k<state.allFoods[i].foods.length;k++){
            if(state.allFoods[i].foods[k]._id==b){
              state.allFoods[i].foods[k].is_featured+=1;
              state.totalPrice += state.allFoods[i].foods[k].specfoods[0].price;
            }
          }
        }
      },
      goujian(state,c){
        for(var i=0;i<state.allFoods.length;i++){
          for(var k=0;k<state.allFoods[i].foods.length;k++){
            if(state.allFoods[i].foods[k]._id==c){
              state.allFoods[i].foods[k].is_featured-=1;
              state.totalPrice -= state.allFoods[i].foods[k].specfoods[0].price;
            }
          }
        }
      }
    
}