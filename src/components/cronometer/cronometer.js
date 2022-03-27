import React, {useState} from "react";
import champions from "lol-champions"
import spells from "lol-spells"
import './cronometer.css'

function searchIconChamp(key){
    for (var i = 0; i < 152; i++) {
        if (key === champions[i].key){
            return champions[i].icon
        }
    } 
}

function searchIconSpell(key){
    for (var i = 0; i < 18; i++) {
        if (key === spells[i].key){
            return spells[i].icon
        }
    } 
}

function Cronometer(){
    const [selectChampion, setSelectChampion] = useState(0); 
    const [selectPrimarySpell, setSelectPrimarySpell] = useState(0);
    const [selectSecundarySpell, setSelectSecundarySpell] = useState(0);

    return (
        <div className="cronometer">
            {console.log(selectChampion)}

            <select onChange={e => setSelectChampion(e.target.value)}>{
                champions.map((champ) =>
                    <option key={champ.id} value={champ.key}>
                        {champ.name}
                    </option> )
            }</select>

            <select onChange={e => setSelectPrimarySpell(e.target.value)}>{
                spells.map((spell) =>
                    <option key={spell.id} value={spell.key}>
                        {spell.name}
                    </option> )
            }</select>

            <select onChange={e => setSelectSecundarySpell(e.target.value)}>{
                spells.map((spell) =>
                    <option key={spell.id} value={spell.key}>
                        {spell.name}
                    </option> )
            }</select>

            {console.log(spells)}
            <img src={searchIconChamp(selectChampion)}></img>
            <img src={searchIconSpell(selectPrimarySpell)}></img>
            <img src={searchIconSpell(selectSecundarySpell)}></img>
        </div>
    );
}

export default Cronometer;