//vacaciones y feriados
//desaparecen asistencias o alumnos de las planillas de los profes
//Contrato - Javi
//Sueldo - Javi
//Planillas - Javi
//Renuncias - Micaela (primero y despues javi y bel)
//Certificados - Bel
//Constancia de trabajo - Mar y Bel
//Problemas con alumnos - Coordinacion Micaela
//Horarios equivocados - Coordinacion Micaela
//Inasistencias consecutivas de alumnos - Coordinacion Micaela
//Materiales (santi +3 o isa -3)
//planilla de disponibilidad (Isamara)
//Capacitaciones y orientación general(santi +3 o isa -3)
//Asistencia emocional (Jesica) 
//Inteligencia emocional (Jesica)


//→→Functions←←
    //Function to receive the information about the teacher
    function import_teachers_info(){
        Swal.fire({

        //Text in the alert
        title: `<h3 style="justify-content: center;">Bienvenido/a al directorio de contactos del <b>staff de Alianza</b>.</h3>
        <h5 style="font-size:22px;justify-content: center;">En esta plataforma vas a poder encontrar los contactos del personal responsable de abordar y resolver tus dudas e inquietudes.</h5>
        <h6 style="font-size:16px;justify-content: center;">Para poder gestionar mejor tu solucionador de problemas vamos a necesitar los siguientes datos:</h6>`,
        
        //Propieties
        focusConfirm: false,
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'},
        confirmButtonColor: '#d400d4',
        padding: '1.7rem',
        confirmButtonText: 'Continuar',
        background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
        color: '#00ccff',
        allowOutsideClick: false,
        
        //Create an html format
        html:
            
        '<label ><b>Nombre</b></label><input type="text"  id="swal-input1" class="swal2-input" style="color:#d400d4;">' +
        '<label><b>Num°PA</b></label><input type="text"  id="swal-input2" class="swal2-input"style="color:#d400d4;">' + 
        '<label><b>Celular</b></label><input type="number"  id="swal-input3" class="swal2-input"style="color:#d400d4;">',
        
        //When you enter the values
        preConfirm: () => {
            
        return [
            name_teacher = document.getElementById('swal-input1').value,
            PA_teacher = document.getElementById('swal-input2').value,
            phone_teacher = document.getElementById('swal-input3').value,
            
            Swal.fire({
            //Text in the alert
            html: `<h2 style="justify-content: center;">Ingresaste la siguiente información: </h2>
            <p>Nombre: <strong style="color:#d400d4;">`+name_teacher+`</strong></p>
            <p>N°PA:  <strong style="color:#d400d4;">`+PA_teacher+`</strong></p>
            <p>Celular: <strong style="color:#d400d4;">`+phone_teacher+`</strong></p>
        
            <br>
            <h7 > Si la información es <u>correcto</u> haz click en <b>aceptar</b>, si necesitas <u>modificar</u> algo haz click en <strong>modificar</strong>?<h7>
            `,
            //Propieties
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d400d4',
            cancelButtonColor: '#00ccff',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Modificar',
            padding: '1.7rem',
            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
            color: '#00ccff',
            allowOutsideClick: false,

            //Input decition
            }).then((result) => {

            //If the user choose 'aceptar'
            if (result.isConfirmed) {
                
                swal.fire({
                    title: `<h2>¡Información almacenada!</h2>
                    <h5>Tu Información fue almacenada con exito.</h5>`,
                    background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                    color: '#00ccff',
                    padding: '1.7rem',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                //Wait between the "success" and the other function
                setTimeout(function(){
                    Swal.fire({
    
                        //Text in the alert
                        title: `<h6 style="justify-content: center;">Si desea activar la <u>guia</u> asistencial para contactar al personal correspondiente haz click en <strong>'Aceptar'</strong>. Si desea <u>acceder al directorio</u> haz click en <strong>'Busqueda manual'</strong>?</h6>`,
                        
                        //Propieties
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#d400d4',
                        cancelButtonColor: '#00ccff',
                        padding: '1.7rem',
                        background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                        color: '#00ccff',     
                        cancelButtonText:'Busqueda manual',
                        confirmButtonText: 'Guia asistencial'
                    
                        }).then((result) => {
                        if (result.isConfirmed) {
                        //True("Acept")
                        virtual_asistance_menu()
                        }
                        //False("Cancel")
                        else {
                            Swal.fire({
                    
                                //Text in the alert
                                title: `<h6 style="justify-content: center;">Puedes continuar con la busqueda manual. Si quieres <u>reiniciar</u> la guia asistencial puedes refrescar la pagina.</h6>`,
                                
                                //Propieties
                                confirmButtonColor: '#d400d4',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',     
                                confirmButtonText: 'Entendido'
                        
                            })
                        }
                        })
                }, 1750)
                
                    
            }

            //If the user choose 'modificar'
            else{import_teachers_info()}
            })
        
            ]
        }
    
    })
    }

    //Function to show the asistance menu 
    function virtual_asistance_menu(){
        
        const { value: asistance } =  Swal.fire({
            title: 'Por favor elija la opción que más se asemeje a su necesidad:',
            input: 'select',
            confirmButtonColor: '#d400d4',
            cancelButtonColor: '#00ccff',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Salir',
            padding: '1.7rem',
            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
            color: '#00ccff',
            inputOptions: {

                'Animico': {
                    Asistencia_emocional: 'Asistencia emocional',
                    Inteligencia_emocional: 'Inteligencia emocional',
                    Problemas_con_alumnos_varios: 'Problemas con alumnos (varios)'
                    
                },
              
                'Informativo': {
                    Capacitaciones_y_orientación_general : 'Capacitaciones y orientación general',
                    Materiales: 'Materiales',
                    Vacaciones_o_Feriados: 'Vacaciones o Feriados',
                },
        
                'Soporte Tecnico': {
                    Certificaciones_alumnos: 'Certificaciones (alumnos)',
                    Constancia_de_trabajo_o_estudios: 'Constancia de trabajo o estudio (profesores o alumnos)',
                    Horarios_equivocados: 'Horarios equivocados',
                    Inasistencias_consecutivas_del_alumno: 'Inasistencias consecutivas del alumno',
                    Planillas: 'Planillas de asistencia del profesor',
                    Planillas_de_disponibilidad: 'Planillas de disponibilidad'
                },
        
                'Finanzas y miselaneos': {
                    Contratos : 'Contratos',
                    Honorarios_sueldos: 'Honorarios (sueldos)',
                    Orientacion_a_USDT_y_criptomonedas: 'Orientacion a USDT y criptomonedas (PA argentinos)',
                    Renuncias: 'Renuncias'
                },
        
            },
            inputPlaceholder: 'Selecciona una opción',
            showCancelButton: true,
            inputValidator: (value) => {
                
                switch (value) {
                    case 'Asistencia_emocional':
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Asistencia emocional"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Jesica.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
        
                    case 'Inteligencia_emocional':

                            Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Inteligencia emocional"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Jesica.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break

                    case 'Problemas_con_alumnos_varios':
                                
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Problemas con alumnos (varios)"</h6>`,
                            

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Micaela.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
        
                    case 'Capacitaciones_y_orientación_general':
                        function isamara_capacitacion(){
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación general"</h6>`,
    
                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
    
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                denyButtonText: `Tengo +3 meses`,
                                denyButtonColor: '#4ecf1b',
                                cancelButtonText: 'Volver al asistente',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                }
                                //+3 months
                                else if (result.isDenied) {santiago_capacitacion()}
                                
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                            })}

                        function santiago_capacitacion(){
                                Swal.fire({
                                        //Text in the alert
                                        title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación general"</h6>`,
            
                                        //Img in the alert
                                        imageUrl: './Img_circle_staff/Circle_Modals/Santiago.png',
                                        imageWidth: 350,
                                        imageHeight: 300,
                                        imageAlt: 'Custom image',
            
                                        //Propieties
                                        showCancelButton: true,
                                        showDenyButton: true,
                                        confirmButtonColor: '#d400d4',
                                        cancelButtonColor: '#00ccff',
                                        confirmButtonText: 'Enviar Mensaje',
                                        denyButtonText: `Tengo -3 meses`,
                                        denyButtonColor: 'red',
                                        cancelButtonText: 'Volver al asistente',
                                        padding: '1.7rem',
                                        background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                        color: '#00ccff',
                                }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                 }
                                //+3 months
                                else if (result.isDenied) {isamara_capacitacion()}
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                                })}                          
                                    
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación general"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `Tengo +3 meses`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }
                            //+3 months
                            else if (result.isDenied) {
                                santiago_capacitacion()}
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
            
                    case 'Materiales':
                        function isamara_capacitacion_materiales(){
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
    
                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
    
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                denyButtonText: `Tengo +3 meses`,
                                denyButtonColor: '#4ecf1b',
                                cancelButtonText: 'Volver al asistente',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                }
                                //+3 months
                                else if (result.isDenied) {santiago_capacitacion_materiales()}
                                
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                            })}

                        function santiago_capacitacion_materiales(){
                                Swal.fire({
                                        //Text in the alert
                                        title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
            
                                        //Img in the alert
                                        imageUrl: './Img_circle_staff/Circle_Modals/Santiago.png',
                                        imageWidth: 350,
                                        imageHeight: 300,
                                        imageAlt: 'Custom image',
            
                                        //Propieties
                                        showCancelButton: true,
                                        showDenyButton: true,
                                        confirmButtonColor: '#d400d4',
                                        cancelButtonColor: '#00ccff',
                                        confirmButtonText: 'Enviar Mensaje',
                                        denyButtonText: `Tengo -3 meses`,
                                        denyButtonColor: 'red',
                                        cancelButtonText: 'Volver al asistente',
                                        padding: '1.7rem',
                                        background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                        color: '#00ccff',
                                }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                 }
                                //+3 months
                                else if (result.isDenied) {isamara_capacitacion_materiales()}
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                                })}                          
                                    
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `Tengo +3 meses`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }
                            //+3 months
                            else if (result.isDenied) {
                                santiago_capacitacion_materiales()}
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `Tengo +3 meses`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }
                            //+3 months
                            else if (result.isDenied) {
                                Swal.fire({
                                    //Text in the alert
                                    title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
        
                                    //Img in the alert
                                    imageUrl: './Img_circle_staff/Circle_Modals/Santiago.png',
                                    imageWidth: 350,
                                    imageHeight: 300,
                                    imageAlt: 'Custom image',
        
                                    //Propieties
                                    showCancelButton: true,
                                    showDenyButton: true,
                                    confirmButtonColor: '#d400d4',
                                    cancelButtonColor: '#00ccff',
                                    confirmButtonText: 'Enviar Mensaje',
                                    denyButtonText: `Tengo -3 meses`,
                                    denyButtonColor: '#cf1b1b',
                                    cancelButtonText: 'Volver al asistente',
                                    padding: '1.7rem',
                                    background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                    color: '#00ccff',
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                    //True("Acept")
                                    window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                    //redireccionar a un link
                                    virtual_asistance_menu()
                                    }
                                    //3 months
                                    else if (result.isDenied) {
                                        Swal.fire({
                                            //Text in the alert
                                            title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
                
                                            //Img in the alert
                                            imageUrl: './Img_circle_staff/Circle_Modals/Isamara.png',
                                            imageWidth: 350,
                                            imageHeight: 300,
                                            imageAlt: 'Custom image',
                
                                            //Propieties
                                            showCancelButton: true,
                                            confirmButtonColor: '#d400d4',
                                            cancelButtonColor: '#00ccff',
                                            confirmButtonText: 'Enviar Mensaje',
                                            cancelButtonText: 'Volver al asistente',
                                            padding: '1.7rem',
                                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                            color: '#00ccff',
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                            //True("Acept")
                                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                                            //redireccionar a un link
                                            virtual_asistance_menu()
                                            }
                                            //False("Volver al asistente")
                                            else {virtual_asistance_menu()}
                                            })
                                    }
                                    //False("Volver al asistente")
                                    else {virtual_asistance_menu()}
                                    })
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
        
                    case 'Vacaciones_o_Feriados':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Haz seleccionado "Vacaciones o Feriados"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/MariaPaula.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
        
                    case 'Certificaciones_alumnos':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Haz seleccionado "Certificaciones (alumnos)"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/MariaPaula.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
            
                    case 'Constancia_de_trabajo_o_estudios':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Haz seleccionado "Constancia de trabajo o estudio (profesores o alumnos)"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/MariaPaula.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" + "%0A%0ACelular: %0A" + phone_teacher , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                        
                    case 'Horarios_equivocados':
                        alert(`Haz seleccionado "Horarios equivocados"`);
                        break
            
                    case 'Inasistencias_consecutivas_del_alumno':
                        alert(`Haz seleccionado "Inasistencias consecutivas del alumno"`);
                        break
                
                    case 'Planillas':
                        alert(`Haz seleccionado "Planillas de asistencia del profesor"`);
                        break
            
                    case 'Planillas_de_disponibilidad':
                        alert(`Haz seleccionado "Planillas de disponibilidad"`);
                        break
            
                    case 'Contratos':
                        alert(`Haz seleccionado "Contratos"`);
                        break
                
                    case 'Honorarios_sueldos':
                        alert(`Haz seleccionado "Honorarios (sueldos)"`);
                        break
                    
                    case 'Orientacion_a_USDT_y_criptomonedas':
                        alert(`Haz seleccionado "Orientacion a USDT y criptomonedas (PA argentinos)"`);
                        break
                
                    case 'Renuncias':
                        alert(`Haz seleccionado "Renuncias"`);
                        break
                           
                    } 
                }
            })
    }
           
    
//→→Variables←←
    active_virtual_assistance = ''
    name_teacher =''
    PA_teacher = ''
    phone_teacher = ''

//Welcome (When the user refresh the site)
    import_teachers_info()


    