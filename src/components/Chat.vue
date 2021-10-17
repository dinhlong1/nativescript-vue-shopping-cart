<template>
    <Page title="Bot Chat" >
        <GridLayout orientation="vertical" columns="*" rows="*,auto"
            width="100%" height="100%">
            <StackLayout width="100%">
                <ScrollView>
                    <StackLayout>
                        <GridLayout rows="auto" columns="auto,*,auto"
                            v-for="ms in listMessage" :key="ms.id"
                            width="100%">
                            <GridLayout :col="ms.isRight ? '2':'0'" row="0"
                                rows="auto" columns="auto,*,auto">

                                <!-- avatar -->
                                <Image row="0" :col="ms.isRight ? '4' : '0'"
                                    borderRadius="32" margin="8" width="64"
                                    stretch="aspectFill"
                                    verticalAlignment="top" :src="ms.image"
                                    :visibility="ms.image ? 'visible' : 'collapsed'" />

                                <!-- the message -->
                                <StackLayout row="0" col="1"
                                    className="nsChatView-message">

                                    <!-- the message area -->
                                    <StackLayout
                                        className="nsChatView-content"
                                        verticalAlignment="top"
                                        :horizontalAlignment="ms.isRight ? 'right' : 'left'">

                                        <!-- the date / time -->
                                        <Label className="nsChatView-date"
                                            :horizontalAlignment="ms.isRight ? 'right' : 'left'"
                                            :text="ms.date"
                                            :visibility="ms.date ? 'visible' : 'collapsed'" />

                                        <!-- the message text -->
                                        <Label
                                            className="nsChatView-messageText"
                                            :horizontalAlignment="ms.isRight ? 'right' : 'left'"
                                            :text="ms.message"
                                            textWrap="true" />
                                    </StackLayout>
                                </StackLayout>

                                <!-- The invisible separator -->
                            </GridLayout>
                        </GridLayout>
                    </StackLayout>
                </ScrollView>
            </StackLayout>
            <StackLayout col="0" row="1" height="120" orientation="horizontal"
                backgroundColor="#53ba82">
                <!-- chat message field -->
                <TextField textAlignment="left" height="100" width="80%"
                    borderRadius="15px" font-size="14" hint="Send from bot"
                     backgroundColor="white"
                    v-model="message" />

                <!-- SEND button -->
                <Button className="nsChatView-sendMessageButton"
                    horizontalAlignment="bottom" height="40" text="Send" width="20%"
                    @tap="send()" />
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                image: "~assets/images/icon.png",
                date: null,
                message: "",
                isRight: "",
                listMessage: [{
                    id: 1,
                    date: this.getTime(),
                    message: "Xin chào tôi có thể giúp gì bạn",
                    isRight: false,
                    image: "https://hoaky68.com/wp-content/uploads/2021/05/tien-bip.jpg"
                }]
            };
        },
        methods: {
            repChat(msg){
              if (msg.toLowerCase().indexOf("you") != -1){
                  return "I am Fine"
              }
              else if (msg.toLowerCase().indexOf("time") != -1){
                  return "Hiện tại là" +this.getTime()
              }
              else if (msg.toLowerCase().indexOf("sản phẩm")!= -1){
                  return "Tự tìm hiểu đi"
              }
              else if (msg.toLowerCase().indexOf("điểm")!= -1){
                  return "Bài này xứng đáng 10 điểm"
              }
              else if (msg.toLowerCase().indexOf("giờ")!= -1){
                  return "Hiện tại là" +this.getTime()
              }
            else if (msg.toLowerCase().indexOf("làm gì")!= -1){
                return "Bán hàng chứ còn gì"
            }
             else if (msg.toLowerCase().indexOf("test")!= -1){
                return "Test gì test lắm vậy"
            }
            else if (msg.toLowerCase().indexOf("mua")!= -1){
                return "Muốn mua gì thì mua"
            }else{
                return "Tôi không hiểu bạn đang nói gì"
            }
            }
            ,
            numberToString(n) {
                var str = "" + n;
                if (n < 10) {
                    str = "0" + str;
                }
                return str;
            },
            getTime() {
                var now = new Date();
                var hours = now.getHours();
                
                return   this.numberToString(hours == 12 ? 12 : hours % 12) +
                    ":" +
                    this.numberToString(now.getMinutes()) +
                    " " +
                    (hours < 13 ? "AM" : "PM")
            
            },
            send() {
                var me = {
                    id: this.listMessage.length + 1,
                    date: this.getTime(),
                    message: this.message,
                    isRight: true,
                    image: "https://yt3.ggpht.com/0jVeJDflMXzDeNQpodTxMVNG-RLUXmUcegHSYiXztNq3Fm4aK1Hqkmnu22zvp12fYNfi7N9hDw=s900-c-k-c0x00ffffff-no-rj"
                };
                
                var friend = {
                    id: this.listMessage.length + 2,
                    date: this.getTime(),
                    message:this.repChat(this.message),
                    isRight: false,
                    image: "https://hoaky68.com/wp-content/uploads/2021/05/tien-bip.jpg"
                };
                this.message = "";
                this.listMessage.push(me);
                this.listMessage.push(friend);
                console.log(this.listMessage);
            }
        }
    };
</script>

<style scoped>
   
</style>