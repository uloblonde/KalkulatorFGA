function masukin(valuenya){
    document.ikiform.field.value = ikiform.field.value += valuenya
  }
  function samadengan(){
    document.ikiform.field.value = eval(ikiform.field.value)
  }
  function clean(){
    document.ikiform.field.value = ""
  }
  function hapus(){
    document.ikiform.field.value = document.ikiform.field.value.substring(0, document.ikiform.field.value.length-1)
    console.error();
  }
  
  function persen(){
    let value = document.ikiform.field.value
    value = value / 100
    document.ikiform.field.value = value
  }