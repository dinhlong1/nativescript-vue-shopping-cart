<template>
    <Page actionBarHidden="true" class="anim-page"
        backgroundSpanUnderStatusBar="true" >
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/assets/images/icon.png"></Image>
                <Label class="header" text="Shoppe"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    // import getData from "../data.json";
    import App from "./App";
    
    
    const userService = {
    register(user) {
        return Promise.resolve(user);
    },
    login(user) {
        return Promise.resolve(user);
    },
    resetPassword(email) {
        return Promise.resolve(email);
    }
    };
    const HomePage = {
    template: `
        <Page>
            <Label class="m-20" textWrap="true" text="You have successfully authenticated. This is where you build your core application functionality."></Label>
        </Page>
        `
    };

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "",
                    password: "",
                    confirmPassword: ""
                },

            };
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Vui lòng nhập email và mật khẩu."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },

            login() {
                userService
                    .login(this.user)
                    .then(() => {
                    this.$navigateTo(App);
                    })
                    .catch(() => {
                    this.alert("Không tìm thấy tài khoản của bạn");
                    });
                },

            register() {
                if (this.user.password != this.user.confirmPassword) {
                    this.alert("Mật khẩu không khớp nhau");
                    return;
                }
                userService
                    .register(this.user)
                    .then(() => {
                    this.alert("Tài khoản đã được tạo");
                    this.isLoggingIn = true;
                    })
                    .catch(() => {
                    this.alert("Tại tài khoản thất bại");
                    });
            },
            forgotPassword() {
                prompt({
                    title: "Quên mật khẩu",
                    message:
                    "Nhập email đã đăng ký tài khoản, mật khẩu sẽ gửi về địa chỉ email",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Quay lại"
                }).then(data => {
                    if (data.result) {
                    userService
                        .resetPassword(data.text.trim())
                        .then(() => {
                        this.alert(
                            "Hãy kiểm tra hòm thư email của bạn"
                        );
                        })
                        .catch(() => {
                        this.alert(
                            "Gửi yêu cầu thất bại"
                        );
                        });
                    }
                });
        },
        focusPassword() {
            this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
            if (!this.isLoggingIn) {
                this.$refs.confirmPassword.nativeView.focus();
            }
            },
            alert(message) {
            return alert({
                title: "Long",
                okButtonText: "OK",
                message: message
            });
            },
            buttonloading() {
            this.isInitialized = !this.isInitialized;
            },
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
