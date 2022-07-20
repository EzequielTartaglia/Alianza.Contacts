
//Alumnos bussines (Bianca)
//Referidos para trabajar (Frank)
//Transferencias de alumnos (Reasignaciones) → enviar a melina y completar formulario de transferencias (botones)
//Agregar a textos descriptivos de pasos a seguir
//Videollamada de consulta (psicologia) → Crear funcion similar a Zoom

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
                    Capacitaciones_y_orientación_general : 'Capacitaciones y orientación pedagogica general',
                    Materiales: 'Materiales',
                    Vacaciones_o_Feriados: 'Vacaciones o Feriados',
                },
        
                'Soporte Tecnico': {
                    Horarios_equivocados: 'Horarios equivocados',
                    Inasistencias_consecutivas_del_alumno: 'Inasistencias consecutivas del alumno',
                    Planillas: 'Planillas de asistencia del profesor',
                    Planillas_de_disponibilidad: 'Planillas de disponibilidad',
                    Squads: 'Squads'
                },
        
                'Finanzas y miselaneos': {
                    Certificaciones_alumnos: 'Certificaciones (alumnos)',
                    Constancia_de_trabajo_o_estudios: 'Constancia de trabajo o estudio (profesores o alumnos)',
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
                
                //If the user choose something
                switch (value) {
                    
                    case 'Asistencia_emocional':
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Asistencia emocional"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de los grandes esfuerzos que implica la labor de un educador, por lo que le proveemos un espacio para que puedas <u>expresarte libremente</u> en cada aspecto de tu estadia con nosotros.</p>`,
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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de los grandes esfuerzos que implica la labor de un educador, por lo que le proveemos personal especializado para poder <u>identificar y gestionar tus emociones y las de los demas</u>, durante tu estadia con nosotros.</p>`,
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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del acompañamiento de cada estudiante del instituto, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier inconveniente proveniente de tus estudiantes</u> durante tu estadia con nosotros.</p>`,


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
                                title: `<h6>Haz seleccionado <br>"Capacitaciones y orientación pedagogica general"</h6>`,
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de formar profesionales cada vez más capacitados, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda pedagogica</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo +3 meses".</p>`,

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
                                        html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de formar profesionales cada vez más capacitados, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda pedagogica</u> durante tu estadia con nosotros.</p>
                                        <br><p>Si tienes <strong>menos de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo -3 meses".</p>`,
                    
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
                                    
                            isamara_capacitacion()
                        break
            
                    case 'Materiales':
                        function isamara_capacitacion_materiales(){
                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Materiales"</h6>`,
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de formar profesionales cada vez más capacitados, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar sobre materiales academicos</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo +3 meses".</p>`,
    
        
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
                                        html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de formar profesionales cada vez más capacitados, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar sobre materiales academicos</u> durante tu estadia con nosotros.</p>
                                        <br><p>Si tienes <strong>más de 3 meses en el instituto</strong> puedes hacer <u>click</u> en el boton "Tengo -3 meses".</p>`,
                                
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
                                    
                            isamara_capacitacion_materiales()
                        break
                        
                    case 'Vacaciones_o_Feriados':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Haz seleccionado "Vacaciones o Feriados"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de cuidar y premiar a nuestros profesores dedicados, por lo que le proveemos de personal especializado para que puedas <u>consultar cualquier duda proveniente de feriados o vacaciones</u> durante tu estadia con nosotros.</p>`,

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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de valorar a nuestros estudiantes dedicados, por lo que le proveemos de personal especializado para que puedas <u>consultar y gestionar cualquier duda proveniente de certificaciónes de los estudiantes</u> durante tu estadia con nosotros.</p>`,

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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de valorar a nuestros profesores dedicados, por lo que le proveemos de personal especializado para que puedas <u>consultar y gestionar cualquier constancia de <strong>prestación de servicios</strong> de los profesores</u> durante tu estadia con nosotros.</p>`,

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
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros estudiantes lo mas personalizado posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno) </strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,


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
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros estudiantes lo mas personalizado posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno)</strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,


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
                                    html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros estudiantes lo mas personalizado posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre horarios de los alumnos</u> durante tu estadia con nosotros.</p>
                                    <br><p>Si tienes una duda con un estudiante <strong> deberas comunicarte con el asistente responsable (dependiendo del ID del alumno)</strong> haciendo <u>click</u> en el boton "Sig." hasta encontrar las iniciales correctas.</p>`,
        
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
                      
                        function  Inasistencias_consecutivas_del_alumno(){
                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Inasistencias consecutivas del alumno"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros estudiantes lo mas personalizado posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda sobre la continuidad de un estudiante en el instituto</u> durante tu estadia con nosotros.</p>
                            <br><p>Si tienes una duda con un estudiante <strong> deberas: <br> 
                            <ol>
                            <li>Enviar un mensaje al responsable de coordinación administrativa, enviando el ID y la situacion.</li>
                            <li>Completar el formulario de inasistencias.</li>
                            </ol>
                            </strong><br> Haz <u>click</u> en el boton "Enviar mensaje" para comunicarte con la coordinacion administrativa o "Completa el formulario" para realizar el mismo.</p>`,


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
                            Inasistencias_consecutivas_del_alumno()
                            }

                            //Form 
                            else if (result.isDenied) {
                            window.open("Link_del_formulario_a_modo_ejemplo" , '_blank');
                            Inasistencias_consecutivas_del_alumno()
                            }

                            //False("Volver al asistente")
                            else {virtual_asistance_menu()}
                            })
                        }
                        Inasistencias_consecutivas_del_alumno()
                        break
                
                    case 'Planillas':

                        function javier_planillas(){
                            Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Planillas de asistencia del profesor"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del control metrico del profesor, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de asistencia</u> durante tu estadia con nosotros.</p>
                            <br><p>Si tienes <strong>dudas de como completar correctamente la planilla </strong> puedes hacer <u>click</u> en el boton "¿Cómo completarla?".</p>`,

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
                            denyButtonText: `¿Cómo completarla?`,
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
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del control metrico del profesor, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de asistencia</u> durante tu estadia con nosotros.</p>
                                <br><p>Si tienes <strong>dudas sobre el codigo y errores de este en tu planilla</strong> puedes hacer <u>click</u> en el boton "Dudas con codigo".</p>`,
    
                
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
                                    
                        javier_planillas()
                        break
                    
                    case 'Planillas_de_disponibilidad':

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Planillas de disponibilidad"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del control metrico del profesor, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a las planillas de disponibilidad</u> durante tu estadia con nosotros.</p>`,


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
            
                    case 'Squads':

                            Swal.fire({
                                //Text in the alert
                                title: `<h6>Haz seleccionado <br>"Squads"</h6>`,
                                html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia del control metrico y progreso del profesor, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a los squads</u> durante tu estadia con nosotros.</p>`,
        
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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de un codigo de convivencia entre el prestador de servicio y el contratista, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a tu contrato</u> durante tu estadia con nosotros.</p>`,

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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>brindar un retorno justo y controlado de honorarios entre el prestador de servicio y el contratista</b>, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier duda relacionada a tu honorarios</u> durante tu estadia con nosotros.</p>`,

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
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de <b>brindar un retorno justo y controlado de honorarios, en base al contexto socioeconomico, entre el prestador de servicio y el contratista</b>, por lo que le proveemos de personal especializado para que puedas <u> consultar cualquier duda relacionada a las criptomonedas y su conversion al momento de recibir la liquidación</u> durante tu estadia con nosotros.</p>`,

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

                        function renuncias_javier(){

                        Swal.fire({
                            //Text in the alert
                            title: `<h6>Haz seleccionado <br>"Renuncias"</h6>`,
                            html: `<p style="font-size:16px;justify-content: center;">Desde el area academica estamos conciente de la importancia de acompañar a nuestros profesores de la manera más personalizada posible, por lo que le proveemos de personal especializado para que puedas <u>gestionar y consultar cualquier proceso de cese de prestacion de servicio(renuncia)</u> durante tu estadia con nosotros.</p>
                            <br><p>Para iniciar el proceso de cese de servicio <strong> deberas: <br> 
                            <ol>
                            <li>Enviar un mensaje al responsable de coordinación administrativa haciendo <a href="https://api.whatsapp.com/send?phone=544567891234&text= Coloque la siguiente informacion:                                                                                                                                                                         *-Nombre:*                                                                                                                                                                                                                   *-Numero de PA:*                                                                                                                                                                                                                    *-ID del alumno(si corresponde)*:                                                                                                                                                                                                                    *-Descripcion:*" target="_blank">click aquí</a>, enviando el ID y contacto de cada estudiante.</li>
                            <li>Completar el formulario de transferencias (colocando feedback de cada estudiante), para redirigirte haz <a href="formulario_espacio_vacio_a_modo_de_ejemplo" target="_blank">click aquí</a>.</li>
                            <li>Completar el formulario de renuncia.</li>
                            <li>Enviar un mensaje al responsable del sector juridico</li>
                            <li>Enviar un mensaje al responsable de recursos humanos haciendo <a href="https://api.whatsapp.com/send?phone=544567891234&text= Coloque la siguiente informacion:                                                                                                                                                                         *-Nombre:*                                                                                                                                                                                                                   *-Numero de PA:*                                                                                                                                                                                                                    *-ID del alumno(si corresponde)*:                                                                                                                                                                                                                    *-Descripcion:*" target="_blank">click aquí</a></li>
                            </ol>
                            </strong><br> Haz <u>click</u> en el boton "Enviar mensaje" para comunicarte con el responsable del sector juridico o "Completa el formulario" para realizar el mismo.</p>`,

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
                            renuncias_javier()
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
                                     showDenyButton: true,
                                     confirmButtonColor: '#d400d4',
                                     cancelButtonColor: '#00ccff',
                                     confirmButtonText: 'Aceptar',
                                     cancelButtonText: 'Atras',
                                     denyButtonText: `Modificar`,
                                     denyButtonColor: '#4ecf1b',            
                                     padding: '1.7rem',
                                     background: 'linear-gradient(360deg, rgb(9, 14, 53) ,#162052 70% )',
                                     color: '#00ccff',
                                     allowOutsideClick: false
                                                                  
                                     //Input decition
                                    }).then((result) => {
                                
                                    //If the user choose 'aceptar'
                                    if (result.isConfirmed) {
                                               
                                    window.open("https://api.whatsapp.com/send?phone=123456789&text=Nombre: %0A" + name_teacher_out + "%0A%0APA: %0A" + PA_teacher_out + "%0A" + "%0A%0AMotivo: %0A" + reason_teacher_out + "%0A" + "%0A%0AAviso con anticipación (15dias): %0A" + advise_teacher_out+ "%0A" + "%0A%0AComentarios adicionales: %0A" + observations_teacher_out, '_blank');          
                                    renuncias_javier()
                                    }
                                    else if(result.isDenied) {                                               
                                    resignation_form()
                                    }
                                
                                    //If the user choose 'Atras'
                                    else{renuncias_javier()}
                                    })
                                        
                                    ]
                                    }
                                    
                                    })}
                                
                                    resignation_form()
                                    }
                                    
                                    //False("Volver al asistente")
                                    else {virtual_asistance_menu()}
                                })
                            }
                            renuncias_javier()    
                            break      
                    
            
                        } 
                    }
            }   )
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


    
