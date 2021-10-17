<template>
    <Page actionBarHidden="true" class="anim-page" backgroundSpanUnderStatusBar="true" @loaded="onLoaded">
        <StackLayout>
           <GridLayout verticalAlignment="top" height="54" width="100%" rows="auto" columns="*,auto,auto,auto" background="linear-gradient(-180deg,#f53d2d,#f63)">
                    <TextField v-model="searching"   hint="Nhập tên sản phẩm ..." horizontalAlignment="left" backgroundColor="white" class="searching" col="0" row="0"/>
                    <!-- <Label col="0" row="0" text="Long" fontSize="14" class="status-title"></Label> -->
                    <Label col="1" row="0" @tap="search" class="fas" :text="'fa-search' | fonticon" horizontalAlignment="center" color="white" marginTop="10" fontSize="25" marginLeft="10"/>
                    <!-- <Label col="2" row="0"  :text="'fa-comments' | fonticon" horizontalAlignment="right" color="white" margin="10" fontSize="25" class="fas"/> -->
                </GridLayout>
                <StackLayout dock="top" height="90%" width="100%" style="">
                        <ScrollView>

                            <StackLayout style="font-size:18;">
                                <StackLayout alignItems="center">
                                    <Image src="https://yt3.ggpht.com/0jVeJDflMXzDeNQpodTxMVNG-RLUXmUcegHSYiXztNq3Fm4aK1Hqkmnu22zvp12fYNfi7N9hDw=s900-c-k-c0x00ffffff-no-rj"
                                        stretch="aspectFill" class="profilePic" >
                                    </Image>
                                    <Label text="Tiến Bịp" color="#000"
                                        fontSize="19" fontWeight="bold"
                                        textAlignment="center" />
                                    <StackLayout class="aboutContainer">
                                        <StackLayout orientation="horizontal">
                                            <Label text="" style="font-size:18;color:#557AAD;"
                                                class="font-awesome" />
                                            <Label text="SĐT: 0999999999" style="font-size:16;color:#000;margin-left:9;margin-top:1;"
                                                class="font-awesome" />
                                                
                                        </StackLayout>
                                        <StackLayout orientation="horizontal"
                                            class="aboutRow">
                                            <!-- <Label text="" style="font-size:16;color:#557AAD;"
                                                class="font-awesome" /> -->
                                            <Label text="Đăng xuất" style="font-size:16;color:#000;margin-left:6;"
                                                class="font-awesome" />
                                        </StackLayout>

                                    </StackLayout>
                                    <StackLayout orientation="horizontal"
                                        class="followersContainer">
                                        <StackLayout width="33%">
                                            <Label text="6" class="followersTxtValue" />
                                            <Label text="Posts " class="followersTxt" />
                                        </StackLayout>
                                        <StackLayout width="33%">
                                            <Label text="2300" class="followersTxtValue" />
                                            <Label text="Followers " class="followersTxt" />
                                        </StackLayout>
                                        <StackLayout width="33%">
                                            <Label text="400" class="followersTxtValue" />
                                            <Label text="Following " class="followersTxt" />
                                        </StackLayout>
                                    </StackLayout>
                                </StackLayout>

                                <WrapLayout alignItems="left" backgroundColor="#eeeeee" marginTop="10">
                                    <Image src="https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="https://cdn.nguyenkimmall.com/images/detailed/648/10045480-dien-thoai-samsung-sm-a315gd-s-128gb-a31-xanh-1.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="https://cellphones.com.vn/media/catalog/product/i/p/iphone-12_2__3.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="https://www.epkinhnhatrang.com/wp-content/uploads/2021/05/samsung-galaxy-z-fold-2-vang-600x600-600x600-2.jpg"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-mi-11-lite-5g-2_10.png"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                    <Image src="https://dienthoaimoi.vn/images/products/2021/07/14/resized/ip12_den_1626080558png_1626251170.png"
                                        stretch="aspectFill" class="listImage"
                                        width="33.3%" height="140" />
                                </WrapLayout>

                            </StackLayout>


                        </ScrollView>
                    </StackLayout>
     </StackLayout>
    </Page>
</template>                    

                    
                    