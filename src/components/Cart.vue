<template>
    <Page>
        <ActionBar title="">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Giỏ hàng"  fontSize="20"></Label>
            
        </ActionBar>
        <ScrollView>
            <StackLayout>
                <GridLayout columns="auto,*,*,auto" rows="auto,25" @tap="showItem(item)" v-for="item in cart" :key="item.name"
                    height="250" verticalAlignment="top"
                    borderColor="rgb(238, 77, 45)"
                    border-bottom="6px solid #f44336" padding="20">
                    <StackLayout orientation="vertical" col="0" colSpan="2"
                        marginTop="10">
                        <Image
                            :src="item.image"
                            col="0" horizontalAlignment="left" width="200"
                            height="200" verticalAlignment="bottom" margin="3"
                            stretch="aspectFill" />
                    </StackLayout>
                    <StackLayout orientation="vertical" col="2" horizontalAlignment="left" verticalAlignment="bottom"
                        margin="3" width="100%">
                        <Label :text="'Tên Sp: '+ item.name" margin="3" fontWeight="bold" height="30" color="#EDD59E" />
                        <Label :text="'Giá Sp: '+ formatPrice(item.price)" height="30" color="#A09998" />
                        <FlexboxLayout flexDirection="col-reverse"
                            width="100%" height="50" marginLeft="39"
                            marginTop="5">
                            <Label :text="'fa-minus' | fonticon"
                                horizontalAlignment="left" @tap="minus(item)"
                                width="40" height="40" color="#ee4d2d"
                                class="fas" />
                            <Label :text="item.inCart" fontSize="20"
                                marginBottom="7" color="#ee4d2d" />
                            <Label :text="'fa-plus' | fonticon"
                                horizontalAlignment="left" @tap="plus(item)"
                                marginLeft="30" width="40" height="40"
                                color="#ee4d2d" class="fas" />

                        </FlexboxLayout> -->
                        <Label :text="'Tổng tiền' + formatPrice(item.inCart * item.price)" /> 
                        <Button text="Delete" @tap="deleteI(item)"
                            backgroundColor="rgb(238, 77, 45)"
                            color="white" />
                    </StackLayout>

                </GridLayout>
           
            <Label :text="'Tổng giỏ hàng là' + formatPrice(getTotal()) + 'VNĐ'"  horizontalAlignment="right" v-show="this.cart != []"/>
            </StackLayout>
        </ScrollView>
        
        
         
    </Page>
</template>
<script>
import Detail from './Detail';
export default {
     props:['cart'],
    data() {
        return{
        }     
    },
   
    methods: {
         getTotal(){
            var sum = 0
            for(var i = 0;i < this.cart.length; i++){
               sum = sum + this.cart[i].inCart *this.cart[i].price 
            }
            return sum
        },
        plus(item){
            if (item.inCart < item.numProduct){
                item.inCart ++;
            }
        }
        ,    
        minus(item){
            if (item.inCart > 1){
                item.inCart --;
            }
            if (item.inCart == 1){
                item.inCart == 0
            }
            for(var i = 0;i < this.cart.length; i++){
              if (item.name ==this.cart[i].name){
                    this.cart[i].inCart = item.inCart
                }}
        },
        deleteI(item){
            item.inCart = 0
            for(var i = 0;i < this.cart.length; i++){
              if (item.name ==this.cart[i].name){
                    this.cart[i].inCart = 0
                    this.cart.splice(i,i+1)
                }}
            
        },
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      showItem(item){
          this.$navigateTo(Detail,{
                props:{
                    item : item,
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
      }
    },  
    computed:{
       
        
    }
}
</script>