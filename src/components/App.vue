<template>
    <Page actionBarHidden="true" class="anim-page"
        backgroundSpanUnderStatusBar="true" @loaded="onLoaded">

        <GridLayout columns="*" rows="*,auto" >
            <StackLayout col="0" row="0">
                <GridLayout row="0"  verticalAlignment="top" height="54" width="100%" rows="auto" columns="*,auto,auto,auto" background="linear-gradient(-180deg,#f53d2d,#f63)">
                    <TextField v-model="searching" @tap="search()" :text="textSearching" hint="Nhập tên sản phẩm ..." horizontalAlignment="left" backgroundColor="white" class="searching" col="0" row="0"/>
                    <!-- <Label col="0" row="0" text="Long" fontSize="14" class="status-title"></Label> -->
                    <Label col="1" row="0"  class="fas" :text="'fa-shopping-cart' | fonticon" horizontalAlignment="left" color="white" marginTop="10" fontSize="25" marginLeft="10"/>
                    <Label col="2" row="0"  :text="'fa-comments' | fonticon" horizontalAlignment="right" color="white" margin="10" fontSize="25" class="fas" @tap="chatS()"/>
                </GridLayout>
                <ScrollView>
                    <StackLayout>
                        <StackLayout class="wp-sale" marginTop="20" marginBottom="20">
                            <GridLayout columns="auto,*,auto" rows="auto">
                                <Label text="Flash Sale" col="0" row="0" fontWeight="bold" paddingLeft="10" fontSize="20"
                                color="##ee4d2d" />
                                <Label :text="'Xem tất cả('+ listFlashSale.length +')'" col="2" row="0" fontSize="14" marginRight="20" color="##ee4d2d"/>
                            </GridLayout>
                            <ScrollView class="anim-images" orientation="horizontal">
                            <StackLayout orientation="horizontal" class="">
                                <GridLayout v-for="item in listFlashSale" :key="item.invId" rows="auto" columns="*">
                                    <card-view  class="card" margin="10" elevation="40" radius="12" row="0" col="0">
                                        <stack-layout class="">
                                            <Image  class="img-sale"  stretch="aspectFill" :src="item.image" width="100%" height="150"/>
                                            <Label  class="title" :text="formatPrice(item.price) + ' VNĐ'" marginTop="10" color="#f63"></Label>
                                            <Label  class="price-old" :text="formatPrice(item.priceOld) + ' VNĐ' " marginTop="5"></Label>
                                            <Label  class="sold" text="120 Sp đã bán"/>
                                        </stack-layout>
                                    </card-view>
                                </GridLayout>
                            </StackLayout>
                            </ScrollView>
                        </StackLayout>
                        <StackLayout>
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
                                                <Label :text="formatPrice(listProducts[(i-1) * itemsPerRow].price) + ' VNĐ'" color="#f63" col="0" row="0" />
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
                                                <Label :text="formatPrice(listProducts[(i-1) * itemsPerRow+1].price) + ' VNĐ'" color="#f63" col="0" row="0" />
                                                <Label class="place" :text="listProducts[(i-1) * itemsPerRow+1].place" col="2" row="0" color="#cccccc" />
                                            </GridLayout>
                                        </StackLayout>
                                    </stack-layout>
                                </card-view>
                            </GridLayout>
                        </StackLayout>
                        <!-- end -->
                    </StackLayout>
                </ScrollView>
            </StackLayout>
            <!-- end -->
            <StackLayout col="0" row="1">

                <GridLayout class="control" columns="auto,auto,*,*" rows="auto" height="auto" horizontalAlignment="center">
                    <StackLayout class="" col="0" row="0" width="25%" textAlignment="center" padding="10">
                        <Label class="fas" :text="'fa-home' | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu active" text="Home" textAlignment="center" />
                    </StackLayout>
                    <StackLayout class="" col="1" row="0"  width="25%" textAlignment="center" padding="10" @tap="notification()">
                        <Label class="fas" :text="'fa-bell' | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu" text="Thông báo" textAlignment="center" />
                    </StackLayout>
                    <StackLayout class="" col="2" row="0" width="25%" textAlignment="center" @tap="showCart()" padding="10" >
                        <Label class="fas" :text="iconCart | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu" text="Giỏ Hàng" textAlignment="center" />
                    </StackLayout>
                    <StackLayout class="" col="3" row="0" width="25%" textAlignment="center" padding="10" @tap="showProfile()">
                        <Label class="fas" :text="'fa-user' | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu" text="Tôi" textAlignment="center" />
                    </StackLayout>    
                </GridLayout>
            </StackLayout>
        </GridLayout>

		  
    </Page>
</template>

<script >
import getData from "../data.json";
import Detail from './Detail';
import Search from './Search';
import Profile from './Profile';
import Chat from './Chat';
import Cart from './Cart';


// import Login from './Login';
import Notification from './Notification';

  export default {
    data() {
        return {
            icon: 'fa-star', 
            iconHome:"fa-rocket",
            iconHeart : "fa-heart",
            iconCart:"fa-shopping-cart",
            listProducts:getData.listProducts,
            listCategory:getData.listCategory,
            listFlashSale:getData.flashSaleProduct,
            itemsPerRow:2,
            searching:null,
            items:{
            },
            cart:[]
            ,
            isLogin:false,
            Products:getData.listProducts,
        }
        },
        computed:{
            rowCount(){
                return Math.ceil(this.listProducts.length / this.itemsPerRow);
            }
        }
        ,
   
	methods: {
        notification(){
            this.$navigateTo(Notification,{
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			}

            )}
        ,
        chatS(){
             this.$navigateTo(Chat,{
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			}

            )
        }
        ,
        showProfile(){
             this.$navigateTo(Profile,{
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			}
             )}
        ,
        search(){
            this.$navigateTo(Search,{
                props:{
                    Products:this.listProducts,
                    // listProducts:this.listProducts,
                },
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			})
        },
        showCart(){
            this.$navigateTo(Cart,{
                props:{
                    cart:this.cart,
                    // listProducts:this.listProducts,
                },
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			})
            
        }
        ,
		showDetail(i){
			this.$navigateTo(Detail,{
                props:{
                    item : this.listProducts[i],
                    // listProducts :this.listProducts,
                    cart : this.cart,
                },
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			})
		},
        
        indexChange: function(args) {
            let newIndex = args.value
            console.log('Current tab index: ' + newIndex)
        },
        onItemTap(event) {
            console.log(event.index)
            console.log(event.item)
        }, formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
	}
  }
</script>

<style scoped>
    ActionBar {
        height:100px;
        font-weight: bold;
        background:linear-gradient(-180deg,#f53d2d,#f63)
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
        width: 330px;
    }
</style>
