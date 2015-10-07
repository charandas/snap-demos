"format es6";

import './style.css!css'

import {domReady} from 'helpers/domReady'
import {Snap} from 'snap.svg'
import {Actor, Tween} from 'Popmotion/popmotion'

domReady(() => {
    var snapC = Snap("#svgC");

    var pathAttrs = (house) =>  {
        return {
            id: house,
            fill: "none",
            strokeWidth: "4",
            stroke: "#ffffff",
            strokeMiterLimit: "10",
            strokeDasharray: "12 6",
            strokeDashOffset: "180"
        }

    }

    var pathData = [
        "M800 0 L1200 300 L800 600 L400 300 Z",
        "M400 300 L0 0 L800 0 Z",
        "M400 300 L0 0 L0 600 Z",
        "M400 300 L0 600 L400 900 L800 600 Z",
        "M400 900 L0 600 L0 1200 Z",
        "M400 900 L0 1200 L800 1200 Z",
        "M800 600 L400 900 L800 1200 L1200 900 Z",
        "M1200 900 L800 1200 L1600 1200 Z",
        "M1200 900 L1600 1200 L1600 600 Z",
        "M800 600 L1200 900 L1600 600 L1200 300 Z",
        "M1200 300 L1600 600 L1600 0 Z",
        "M1200 300 L1600 0 L800 0 Z"

    ]

    var houseData = [
        "Asc Sa",
        "",
        "",
        "",
        "Ra",
        "JuR",
        "",
        "Mo",
        "",
        "Ma",
        "Me Ke Ve Su",
        ""

    ]

    var houses = [1,2,3,4,5,6,7,8,9,10,11,12]

    Array.forEach(houses, (house) => {

        snapC.path(pathData[house-1]).attr(pathAttrs(`house${house}`))

        let path = document.querySelectorAll(`path#house${house}`)
        addText(path[0], houseData[house-1])
    })

    function addText(p, text)
    {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
        var b = p.getBBox();
        t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2) + ")");
        t.textContent = text;
        t.setAttribute("fill", "#ffffff");
        t.setAttribute("stroke", "#ffffff")
        t.setAttribute("font-size", "44");
        p.parentNode.insertBefore(t, p.nextSibling);
    }

    Array.forEach(houses, (house) => {
        let houseActor = new Actor(`path#house${house}`);
        let fooTween = new Tween({
            duration: 2000,
            values: {
                fill: '#000'
            }
        })

        houseActor.start(fooTween);

    })


});