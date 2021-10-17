<template>
    <Page>
        <ActionBar title="">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <!-- <Label text="Detail" textAlignment="right" fontSize="20"></Label> -->
            <Label class="fas" :text="'fa-shopping-cart' | fonticon" horizontalAlignment="right"  marginRight="30" fontSize="20"/>
        </ActionBar>
        <GridLayout columns="*" rows="*,auto" >
            <!-- noi dung san pham -->
       

            <StackLayout col="0" row="0">
                <ScrollView>
                    <StackLayout>
                        <Image height="auto" class="img-detail" :src="item.image" />
                        <StackLayout padding="16">
                            <GridLayout columns="*,auto,40" rows="auto" marginTop="10">
                                <StackLayout row="0" col="0" colSpan="2" >
                                    <Label class="price" :text="formatPrice(item.price)+'VNĐ'" />
                                   
                                </StackLayout>
                                <Label class="far" :text="'fa-heart '| fonticon" row="0" col="1" fontSize="16" />
                            </GridLayout>
                            <HtmlView margin="0" class="name-item" :html="`<div><h1>${item.name}</h1></div>`" /> 
                            <Label text="Thông Tin Sản Phẩm" />
                            <HtmlView margin="18" class="desc" :html="`<div><p>${item.desc}</p></div>`" />
                             <Label class="number-item" :text="`Số lượng: ${item.numProduct}SP`"/>
                            <StackLayout class="box" marginTop="5">
                                <Label text="Dịch vụ" fontSize="16" fontWeight="bold"/>
                                <Label text="7 ngày trả hảng cho người bán"/>
                            </StackLayout>

                            
                        </StackLayout>
                        <!-- end noi dung -->
                        
                    </StackLayout>

                </ScrollView>

            </StackLayout>
            <!-- nut mua hang -->
            <StackLayout col="0" row="1">
                <GridLayout class="control" columns="auto,auto,*,*" rows="auto" height="auto" horizontalAlignment="center">
                    <StackLayout class="" col="0" row="0" width="25%" textAlignment="center" padding="10" @tap="chatP()">
                        <Label class="far" :text="'fa-comments' | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu active" text="Chat ngay" textAlignment="center" />
                    </StackLayout>
                    <StackLayout class="" col="1" row="0"  width="25%" textAlignment="center" padding="10" @tap="addCart()">
                        <Label class="fas" :text="'fa-cart-plus' | fonticon" textAlignment="center" fontSize="20"/>
                        <Label class="title-menu" text="Thêm giỏ hàng" textAlignment="center"  />
                    </StackLayout>
                    <StackLayout class="" col="2" colSpan="2" row="0" width="50%" textAlignment="center" padding="10" backgroundColor="#f53d2d" @tap="buyP()">
                        <!-- <Label class="fas" :text="iconCart | fonticon" textAlignment="center" fontSize="20"/> -->
                        <Label class="title-menu" text="Mua ngay"  textAlignment="center" />
                    </StackLayout>
                </GridLayout>
            </StackLayout>
                    
        </GridLayout> 
    </Page>
</template>

<script>
import getData from "../data.json";
import Chat from "./Chat.vue"
import Cart from "./Cart.vue"
export default {
    props:["item","cart"],
    data() {
        return{
            listComments:getData.listComments,
        }
    },
    
    methods: {
        addCart(){
            if (this.item.inCart < this.item.numProduct){
                this.item.inCart += 1;          
                if (this.cart != []){
                    this.cart.push(this.item)
                }else{
                    var flag = 0;
                    for (var i = 0;i <this.cart.length; i++){
                        if (this.item.name == this.cart[i].name){
                            this.cart[i].inCart = this.item.inCart
                            flag = 1
                        }
                    }
                    if (flag == 0){
                        this.cart.push(this.item)
                    }
                }
                   
            }
            
        },
        buyP(){
             this.$navigateTo(Cart,{
                 props:{
                    // listProducts :this.listProducts,
                    cart :this.cart}
                 ,
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			}
            )
        },
        chatP(){
            this.$navigateTo(Chat,{
				animated: true,
				transition:{
					name:'slideLeft',
					duration:200,
					curve:'easeIn',
				}
			}
            )
        },
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    }


}
</script>

<style scoped>
    /* ActionBar{
        background:#fff;
        opacity: 0.1;
    } */
    NavigationButton{
        opacity: 0.2;
       
    }
    .control-buy{
        border: 3px solid #ccc;
        align-items: center;
        padding: 10px;
    }
    .btn-chat{
        border-left: 3px solid #ccc;
        color: #ff783a;
        font-size: 20px;
    }
    .btn-buy{
        color: #fff;
        background:#66ffff;
        border-radius: 30px;
        padding: 10px 10px;
        text-align: center;
    }
    .btn-add-cart{
        color: #fff;
        background:linear-gradient(45deg, #4ed6ff, #1fdcfd);
        border-radius: 30px;
        padding: 10px 10px;
        text-align: center;
    }
    .img-detail{
        border-radius:20px;
    }
    .price{
       
        font-weight: bold;
        font-size: 25px;
    }
    .price-old{
       text-decoration: line-through;
       margin-bottom: 20px;
    }
    .color-star{
        color:rgb(255, 153, 0);
        font-size: 12px;
    }
    .img-choose{
        border-radius: 20px;
    }
    .box{
        border-radius: 10px;
        background: linear-gradient(90deg,#ffffff,#d5f9ff) ;
        padding: 10px;
        padding-top: auto;
        padding-bottom: auto;
        border:2px solid #cccccc;
        height:170px;
        /* text-align:center; */
    }
    .name-user{
        font-weight: bold;
    }
    .user-comment{
        border-radius: 50%;
        height:100px;
        width: 100px;
    }
    .img-rate{
        width: 150px;
        height:150px;
        border-radius: 40px;
    }
</style>