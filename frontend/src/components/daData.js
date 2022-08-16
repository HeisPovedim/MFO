export const daData = (props) => {
  ("#address").suggestions({
    token: "0a6d8a91d324ad8afcbb98473979e7329d944fd6",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});
}