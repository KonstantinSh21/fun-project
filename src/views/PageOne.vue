<template>
  <div class="about">
    <h2>Информационая страница</h2>

    <div class="wrapper">
      <div class="wrapper__text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </div>

      <div class="wrapper_img">
        <img src="https://www.ejin.ru/wp-content/uploads/2017/09/1-887.jpg" alt="">
      </div> 

    </div>
  </div>
</template>
<style scoped>
  .wrapper{
    width: 50%;
    margin: 60px auto;
    padding-bottom: 100px;
  }
  .wrapper__text-center{
    padding: 30px;
    border: 1px solid #ccc;
    border-right: 10px 0 10px 0;
    text-align: left; 
  }

  .wrapper_img{
    display: block;
    height: 100%;
    margin-top: 60px;
  }
  .wrapper_img img{
    border-radius:10px ;
    width: 100%;
  }

  .wrapper iframe{
    margin-top: 60px;
  }
</style>
