<template>
  <Page actionBarHidden="true" @loaded="onLoaded" backgroundSpanUnderStatusBar="true">
       <StackLayout>
           <GridLayout verticalAlignment="top" height="54" width="100%" rows="auto" columns="*,auto,auto,auto" background="linear-gradient(-180deg,#f53d2d,#f63)">
                    <TextField v-model="searching"   hint="Nhập tên sản phẩm ..." @tap="search()" horizontalAlignment="left" backgroundColor="white" class="searching" col="0" row="0"/>
                    <!-- <Label col="0" row="0" text="Long" fontSize="14" class="status-title"></Label> -->
                    <Label col="1" row="0" @tap="search()" class="fas" :text="'fa-search' | fonticon" horizontalAlignment="center" color="white" marginTop="10" fontSize="25" marginLeft="10"/>
                    <!-- <Label col="2" row="0"  :text="'fa-comments' | fonticon" horizontalAlignment="right" color="white" margin="10" fontSize="25" class="fas"/> -->
                </GridLayout>
                <GridLayout columns="*, *" rows="*" if="rowCount>0" v-for="i in rowCount" :key="i">
                                <!-- thiet ke du lieu o cot thu 0 -->
                                <card-view  class="card-product" margin="10" elevation="40" radius="12"  col="0"
                                v-if="listProducts[(i-1) * itemsPerRow] && listProducts[(i-1) * itemsPerRow].name"
                                >
                                    <stack-layout class="card-item" @tap="showDetail([i-1]*itemsPerRow)">
                                        <Image class="img-thumb" height="250" width="180" stretch="aspectFill" :src="listProducts[(i-1) * itemsPerRow].image"/>
                                        <StackLayout padding="10">
                                            <Label :text="listProducts[(i-1) * itemsPerRow].name" marginTop="5"></Label>
                                            <GridLayout columns="auto,*,auto" rows="auto" marginTop="10">
                                                <Label :text="listProducts[(i-1) * itemsPerRow].price + ' VNĐ'" color="#f63" col="0" row="0" />
                                                <Label class="place" :text="listProducts[(i-1) * itemsPerRow].place" col="2" row="0" color="#cccccc" />
                                            </GridLayout>
                                        </StackLayout>
                                    </stack-layout>
                                </card-view>
                               

                                <!-- thiet ke du lieu o cot thu 1 -->
                                <card-view class="card-product" margin="10" elevation="40" radius="12"  col="1"
                                v-if="listProducts[(i-1) * itemsPerRow+1] && listProducts[(i-1) * itemsPerRow+1].name"
                                >
                                    <stack-layout class="card-item"  @tap="showDetail([i-1]*itemsPerRow+1)">
                                        <Image class="img-thumb"   height="250" width="180" stretch="aspectFill"  :src="listProducts[(i-1) * itemsPerRow+1].image"/>
                                        <StackLayout padding="10">
                                            <Label :text="listProducts[(i-1) * itemsPerRow+1].name" marginTop="10"></Label>
                                            <GridLayout columns="auto,*,auto" rows="auto" marginTop="10">
                                                <Label :text="listProducts[(i-1) * itemsPerRow+1].price + ' VNĐ'" color="#f63" col="0" row="0" />
                                                <Label class="place" :text="listProducts[(i-1) * itemsPerRow+1].place" col="2" row="0" color="#cccccc" />
                                            </GridLayout>
                                        </StackLayout>
                                    </stack-layout>
                                </card-view>
                            </GridLayout>
     </StackLayout>
  </Page>
</template>

<script>
export default {
    data() {
        return {
            listProducts: [],
            searching:"",
            itemsPerRow:2,
        }
    },
    props:['Products'],
    mounted() {
        search()
    },
    computed: {
        search(){
            this.listProducts = [];
            if (this.searching != ''){
                var text = this.searching.trim().toLowerCase()
      
            for (var i = 0; i<this.Products.length;i++){
                if (this.Products[i].name.trim().toLowerCase().indexOf(text) != -1){
                    this.listProducts.push(this.Products[i])
                }
            }
            }else{
                this.listProducts = this.Products
            }
        }

    },
    
}
</script>
 
<style>
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
        width: 300px;
    }
</style>