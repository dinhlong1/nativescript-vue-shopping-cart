<template>
    <Page>
        <ActionBar title="">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Thông báo" textAlignment="right" fontSize="20"></Label>
            <Label class="fas" :text="'fa-comments' | fonticon" horizontalAlignment="right"  marginRight="30" fontSize="20"/>
        </ActionBar>
        <StackLayout>
            <ScrollView>
                <StackLayout class="home-panel">
                    <card-view  v-for="item in items" :key="item.heading" class="card" elevation="40" radius="10" ios:shadowRadius="3">
                        <StackLayout class="card-layout">
                            <Label class="h2" :text="item.heading" color="red" fontStyle="bold"/>
                            <Label class="body" textWrap="true" :text="item.content" />
                        </StackLayout>
                    </card-view>
                </StackLayout>
		    </ScrollView>
        </StackLayout>
        
    </Page>
</template>

<script>
export default {
  data() {
    return {
      showCardView: true,
      items: [
        { heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." },
        { heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." },
        { heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." },
        { heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." },
        { heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." },
        { heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." },
        { heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." },
        { heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." },
        { heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." }
      ]
    }
  },

};
</script>
<style scoped>
.card {
    background-color: #fff;
    color: #4d4d4d;
    margin: 15 15 0;
}
.card-layout {
    padding: 20;
}
.card-layout .h1 {
    margin-bottom: 15;
}
 .searching{
       margin: 20px;
       padding: 20px 10px;
       border-radius: 30%;
       border:5px solid #f00;
       font-size: 14px;
       box-shadow: 0 0 10px #ccc;
       width:75%;
       color:"#f63"
   }
   .stack-item{
       margin:10px;
   }
   .img-ads{
       width: 100px;
       height: 100px;
       border-radius:50%;
   }
	.wp-sale{
        background:linear-gradient(-180deg,#f53d2d,#f63);
        border-radius: 20px;
    }
    .img-sale{
        height: 250px;
        width:100%;
    }
    .price-old{
        text-decoration: line-through;
        color:#cccccc;
    }
    .title{
        
        font-weight: bold;
    }
    .img-slider{
        border-radius: 10px;
    }
    .sold{
        padding: 3px;
        border-radius: 30px;
        margin:5px;
        background:linear-gradient(90deg, #fff,#48C9B0);
        color:#48C9B0;
        horizontal-alignment:"center;"
    }
    .category-product{
        background:linear-gradient(45deg, #fff,rgb(253, 191, 220));
        border-radius:10px;
    }
    .category-product Image{
        width: 100px;
        height: 100px;
    }
    .color-star{
        color:rgb(255, 153, 0);
    }
    .title-menu{
        /* color:rgb(255, 0, 149); */
        font-size: 12px;
    }
    .title-menutitle-menu.active{
        color:rgb(255, 0, 149);
        font-size: 12px;
    }
    .card{
        width: 90%;
    }
</style>