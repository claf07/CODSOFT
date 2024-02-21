function toggle(){
    const togglebtn=document.getElementById("toggle-btn");
    togglebtn.classList.toggle('dark')
    if (togglebtn.classList.contains('dark')){
        document.body.classList.add('dark');
        document.body.classList.remove('active');
        document.querySelector('h2').style.color = 'violet';
        
    }
    else{
        document.body.classList.add('active');
        document.querySelector('h2').style.color = '';
        document.body.classList.remove('dark');
    }
}