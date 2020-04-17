
var input = myForm.myInput;
var reader = new FileReader;

input.addEventListener('change', onChange);


function onChange(event) {
    var file = event.target.files[0];

    reader.readAsText(file);

    reader.onload = onLoad;

}

function onLoad() {
    var result = reader.result;

    var lineas = result.split('\n');
    var re = /([A-Za-z]+\s[A-Za-z]+\s)+([0-5]{1}\.[\d]{1,3})+;([0-5]{1}\.[\d]{1,3})+;([0-5]{1}\.[\d]{1,3})+/g;
    var estudiante = '';
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var notaFinal = 0;
    var aprobacion = '';
    document.write('<table style="width:100%"><tr><td>Estudiante</td><td>Nota 1</td><td>Nota 2</td><td>Nota 3</td><td>Nota Final</td><td>Estatus</td></tr>');
    for (var linea of lineas) {
        //console.log('[linea]', linea)
        var matchx = re.test(linea);
        console.log(matchx);
        if (matchx == true) {
            estudiante = linea.replace(re, "$1");
            nota1 = linea.replace(re, "$2");
            nota2 = linea.replace(re, "$3");
            nota3 = linea.replace(re, "$4");
            notaFinal = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.40)
            
            if (notaFinal>=3) {
                aprobacion='Estudiante Aprobo'
            }else{
                aprobacion='Estudiante Reprobo'
            }

            
            document.write('<tr><td>',estudiante,'</td><td>',nota1,'</td><td>',nota2,'</td><td>',nota3,'</td><td>',notaFinal,'</td><td>',aprobacion,'</td></tr>');
            //document.write(estudiante, ': Nota #1 ', nota1, ' Nota #2 ', nota2, ' Nota #3 ', nota3, '  Nota Final ', notaFinal, '<span>',aprobacion,'</span> <br>');
        } else {
            document.write('<tr><td>Datos Invalidos</td><td></td><td></td><td></td><td></td><td></td></tr>');
        }


    }
    document.write('</table>');

}