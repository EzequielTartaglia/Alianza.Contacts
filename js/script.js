
//Alumnos bussines (Bianca)
//Referidos para trabajar (Frank)
//Transferencias de alumnos (Reasignaciones) → enviar a melina y completar formulario de transferencias (botones)
//Squads (isamara)
//Agregar a textos descriptivos de pasos a seguir


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
            
        '<br><label ><b>Nombre</b></label><br><input type="text"  id="swal-input1" class="swal2-input" style="color:#d400d4;"><br>' +
        '<br><label><b>Num°PA</b></label><br><input type="text"  id="swal-input2" class="swal2-input"style="color:#d400d4;"><br>', 
        
        //When you enter the values
        preConfirm: () => {
            
        return [
            name_teacher = document.getElementById('swal-input1').value,
            PA_teacher = document.getElementById('swal-input2').value,
            
            Swal.fire({
            //Text in the alert
            html: `<h2 style="justify-content: center;">Ingresaste la siguiente información: </h2>
            <p>Nombre: <strong style="color:#d400d4;">`+name_teacher+`</strong></p>
            <p>N°PA:  <strong style="color:#d400d4;">`+PA_teacher+`</strong></p>
        
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
                
                //If the user doesn't choose something
                if (!value) {
                    return 'Selecciona una opción'
                }
                  
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                        
                    case 'Horarios_equivocados':

                        function marcos_hs_equivocados(){
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
    
                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Marcos.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
    
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                denyButtonText: `Sig. (ID: CO o AR)`,
                                denyButtonColor: 'red',
                                cancelButtonText: 'Volver al asistente',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                              }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                }
                                //+3 months
                                else if (result.isDenied) {mauro_hs_equivocados()}
                                
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                            })}
                        function mauro_hs_equivocados(){
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
        
                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Mauro.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
        
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                denyButtonText: `Sig. (ID: US o PE)`,
                                denyButtonColor: 'rgb(209, 193, 50)',
                                cancelButtonText: 'Volver al asistente',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                                }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                }
                                //to Mirna
                                else if (result.isDenied) {mirla_hs_equivocados()}
                                    
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                            })}
                        function mirla_hs_equivocados(){
                                Swal.fire({
                                    //Text in the alert
                                    title: `<h6>Haz seleccionado <br>"Horarios equivocados"</h6>`,
            
                                    //Img in the alert
                                    imageUrl: './Img_circle_staff/Circle_Modals/Mirla.jpg',
                                    imageWidth: 350,
                                    imageHeight: 300,
                                    imageAlt: 'Custom image',
            
                                    //Propieties
                                    showCancelButton: true,
                                    showDenyButton: true,
                                    confirmButtonColor: '#d400d4',
                                    cancelButtonColor: '#00ccff',
                                    confirmButtonText: 'Enviar Mensaje',
                                    denyButtonText: `Sig. (ID: CH o MX)`,
                                    denyButtonColor: '#4ecf1b',
                                    cancelButtonText: 'Volver al asistente',
                                    padding: '1.7rem',
                                    background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                    color: '#00ccff',
                                    }).then((result) => {
                                    if (result.isConfirmed) {
                                        
                                    //True("Acept")
                                    window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                                    //redireccionar a un link
                                    virtual_asistance_menu()
                                    }
                                    //To Marcos
                                    else if (result.isDenied) {marcos_hs_equivocados()}
                                    
                                    //False("Volver al asistente")
                                    else {virtual_asistance_menu()}
                            })}
                        marcos_hs_equivocados()
                        break
            
                    case 'Inasistencias_consecutivas_del_alumno':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Inasistencias consecutivas del alumno"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Micaela.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `Completar formulario`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {
                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }

                            //Form 
                            else if (result.isDenied) {
                            window.open("Link_del_formulario_a_modo_ejemplo" , '_blank');
                            virtual_asistance_menu()
                            }

                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                
                    case 'Planillas':

                        function javier_planillas(){
                            Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,
    
                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Javier.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',
    
                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `¿Como completarla?`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                            }).then((result) => {
                            if (result.isConfirmed) {

                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }

                            //Questions
                            else if (result.isDenied) {micaela_planillas()}
                                
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })}

                        function micaela_planillas(){
                                Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,
            
                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Micaela.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
            
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                denyButtonText: `Dudas con codigo`,
                                denyButtonColor: 'red',
                                cancelButtonText: 'Volver al asistente',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                                }).then((result) => {
                                if (result.isConfirmed) {

                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" , '_blank');          
                                //redireccionar a un link
                                virtual_asistance_menu()
                                 }

                                //Error codes
                                else if (result.isDenied) {javier_planillas()}

                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                            })}                          
                                    
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Javier.png',
                            imageWidth: 350,
                            imageHeight: 300,
                            imageAlt: 'Custom image',

                            //Propieties
                            showCancelButton: true,
                            showDenyButton: true,
                            confirmButtonColor: '#d400d4',
                            cancelButtonColor: '#00ccff',
                            confirmButtonText: 'Enviar Mensaje',
                            denyButtonText: `¿Como completarla?`,
                            denyButtonColor: '#4ecf1b',
                            cancelButtonText: 'Volver al asistente',
                            padding: '1.7rem',
                            background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                            color: '#00ccff',
                          }).then((result) => {
                            if (result.isConfirmed) {

                            //True("Acept")
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            //redireccionar a un link
                            virtual_asistance_menu()
                            }

                            //Questions
                            else if (result.isDenied) {
                                micaela_planillas()}

                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                    
                    case 'Planillas_de_disponibilidad':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Planillas de disponibilidad"</h6>`,

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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
            
                    case 'Contratos':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Contratos"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Javier.png',
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                             
                    case 'Honorarios_sueldos':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Honorarios (sueldos)"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Javier.png',
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                        
                    case 'Orientacion_a_USDT_y_criptomonedas':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Orientacion a USDT y criptomonedas (PA argentinos)"</h6>`,

                            //Img in the alert
                            imageUrl: './Img_circle_staff/Circle_Modals/Ezequiel.png',
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
                            window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A"  , '_blank');          
                            virtual_asistance_menu()
                            //redireccionar a un link
                            }
                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        break
                             
                    case 'Renuncias':
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Renuncias"</h6>`,

                                //Img in the alert
                                imageUrl: './Img_circle_staff/Circle_Modals/Javier.png',
                                imageWidth: 350,
                                imageHeight: 300,
                                imageAlt: 'Custom image',
    
                                //Propieties
                                showCancelButton: true,
                                showDenyButton: true,
                                confirmButtonColor: '#d400d4',
                                cancelButtonColor: '#00ccff',
                                confirmButtonText: 'Enviar Mensaje',
                                cancelButtonText: 'Volver al asistente',
                                denyButtonText: `Completar formulario`,
                                denyButtonColor: '#4ecf1b',
                                padding: '1.7rem',
                                background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                color: '#00ccff',
                                }).then((result) => {
                                if (result.isConfirmed) {
                                //True("Acept")
                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher + "%0A%0APA: %0A" + PA_teacher + "%0A" , '_blank');          
                                virtual_asistance_menu()
                                //redireccionar a un link
                                }
                                //Form 
                                else if (result.isDenied) {
                                    function resignation_form(){
                                    Swal.fire({

                                        //Text in the alert
                                        title: `<h3 style="justify-content: center;"><b>Formulario de renuncias</b></h3>
                                        <h5 style="font-size:22px;justify-content: center;">lamentamos que tu experiencia dentro de nuestra institución no haya sido la que esperabas. De todo corazón queremos brindarte nuestras disculpas, agradeciendote por el servicio brindado hasta el dia de la fecha.</h5>
                                        <h6 style="font-size:16px;justify-content: center;">Para poder gestionar tu proceso de renuncia vamos a necesitar los siguientes datos:</h6>`,
                                        
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
                                            
                                        '<br><label ><b>Nombre:</b></label><br><input type="text"  id="swal-input1" class="swal2-input" style="color:#d400d4;"><br>' +
                                        '<br><label><b>Num°PA:</b></label><br><input type="text"  id="swal-input2" class="swal2-input"style="color:#d400d4;"><br>' + 
                                        '<br><label><b>Motivo:</b></label><br><input type="text"  id="swal-input3" class="swal2-input"style="color:#d400d4;"><br>'+
                                        '<br><label><b>Aviso con anticipación (15dias):</b></label><br><input type="date" id="swal-input4" class="swal2-input"style="color:#d400d4;"><br>'+
                                        '<br><label><b>Comentarios adicionales:</b></label><br><input type="text"  id="swal-input5" class="swal2-input"style="color:#d400d4;">',
                                        //When you enter the values
                                        preConfirm: () => {
                                            
                                        return [
                                            name_teacher_out = document.getElementById('swal-input1').value,
                                            PA_teacher_out = document.getElementById('swal-input2').value,
                                            reason_teacher_out = document.getElementById('swal-input3').value,
                                            advise_teacher_out = document.getElementById('swal-input4').value,
                                            observations_teacher_out = document.getElementById('swal-input5').value,

                                            Swal.fire({
                                            //Text in the alert
                                            html: `<h2 style="justify-content: center;">Ingresaste la siguiente información: </h2>
                                            <p>Nombre: <strong style="color:#d400d4;">`+name_teacher_out+`</strong></p>
                                            <p>N°PA:  <strong style="color:#d400d4;">`+PA_teacher_out+`</strong></p>
                                            <p>Motivo: <strong style="color:#d400d4;">`+reason_teacher_out+`</strong></p>
                                            <p>Aviso con anticipación (15dias): <strong style="color:#d400d4;">`+advise_teacher_out+`</strong></p>
                                            <p>Comentarios adicionales: <strong style="color:#d400d4;">`+observations_teacher_out+`</strong></p>
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
                                            allowOutsideClick: false
                                
                                            
                                            //Input decition
                                            }).then((result) => {
                                
                                            //If the user choose 'aceptar'
                                            if (result.isConfirmed) {
                                               
                                                window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher_out + "%0A%0APA: %0A" + PA_teacher_out + "%0A" + "%0A%0AMotivo: %0A" + reason_teacher_out + "%0A" + "%0A%0AAviso con anticipación (15dias): %0A" + advise_teacher_out+ "%0A" + "%0A%0AComentarios adicionales: %0A" + observations_teacher_out, '_blank');          
                                                virtual_asistance_menu()
                                            }
                                
                                            //If the user choose 'modificar'
                                            else{resignation_form()}
                                            })
                                        
                                            ]
                                        }
                                    
                                    })}
                                
                                    resignation_form()
                                }
                                    
                                //False("Volver al asistente")
                                else {virtual_asistance_menu()}
                                })
                                
                            break      
                } 
                }
        })
    }
           
    
//→→Variables←←
    //Initial
    active_virtual_assistance = ''
    name_teacher =''
    PA_teacher = ''

    //Resignation
    name_teacher_out = ''
    PA_teacher_out = ''
    reason_teacher_out = ''
    advise_teacher_out = ''
    observations_teacher_out = ''
    
//Welcome (When the user refresh the site)
    import_teachers_info()


    
