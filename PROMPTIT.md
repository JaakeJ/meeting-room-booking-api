## Prompt 1

User:
Auta minua tässä seuraavassa tehtävässä. Annan sinulle kaikki ohjeet tähän viestiin. Seuraavaksi haluan että teet minulle Tämän API:n ohjeiden mukaan. Käytä kielenä javascriptiä ja in-memory databasea               [poistettu sanapari ohjeen mukaan] 2026: Ennakkotehtävä
Johdanto
Ohjelmistokehitys on murroksessa. Näkemyksemme mukaan nykypäivän kehittäjä ei pelkästään
kirjoita koodia, vaan hänen tulee pystyä suunnittelemaan, katselmoimaan ja jalostamaan
AI-pohjaisten työkalujen tuottamaa jälkeä.
Tässä ennakkotehtävässä emme pyydä sinua koodaamaan tyhjästä. Sen sijaan haluamme sinun
suhtautuvan tekoälyyn (Cursor, Claude, ChatGPT, GitHub Copilot tai muu vastaava) kuin
junior-tason parikoodaajaan. Tavoitteenasi on ohjata tekoäly ratkaisuun, ottaa sen jälkeen ohjat
omiin käsiisi ja hioa ratkaisusta ammattimainen.
Tavoite
Tehtäväsi on toteuttaa yksinkertainen kokoushuoneiden varausrajapinta (API).
Palvelun tulee tarjota käyttäjille seuraavat toiminnot:
● Varauksen luonti: Varaa huone tietylle aikavälille.
● Varauksen peruutus: Poista varaus.
● Varausten katselu: Listaa kaikki tietyn huoneen varaukset.
Toimintalogiikka (business rules):
● Varaukset eivät saa mennä päällekkäin (kaksi henkilöä ei voi varata samaa huonetta
samaan aikaan).
● Varaukset eivät voi sijoittua menneisyyteen.
● Aloitusajan täytyy olla ennen lopetusaikaa.
Tekniset reunaehdot:
● Voit käyttää mitä tahansa yleistä ohjelmointikieltä, joka on sinulle tuttu (Python,
JavaScript/TypeScript, Java, C# tai vastaava).
● Voit käyttää muistinvaraista tietokantaa (in-memory database), jotta ympäristön
pystytys pysyy yksinkertaisena (esim. PostgreSQL tai MySQL-asennusta ei vaadita).
Muuta huomioitavaa:
● Kuten oikeissakin työtehtävissä, tehtävänanto ei välttämättä sisällä kaikkea tarvittavaa
informaatiota. Koska käytettävissä ei ole “asiakasta” jolta kysyä lisätietoja, niin tehtävän
läpiviemiseksi saat tehdä itse oletuksia, kunhan dokumentoit tekemäsi oletukset.
Työnkulku
Noudata seuraavia vaiheita tarkasti. Arvioimme työskentelytapaasi, emme pelkkää
lopputulosta.
Vaihe 1: Tekoäly parikoodaajana
Käytä valitsemaasi tekoälytyökalua API:n toteutuksen luomiseen. Voit iteroida tekoälyn kanssa
vapaasti: pyydä sitä korjaamaan virheitä, selittämään logiikkaa tai muokkaamaan projektin
rakennetta.
Vaatimus: Dokumentoi keskustelusi. Kopioi käyttämäsi kehotteet (promptit) ja tekoälyn
vastaukset tiedostoon nimeltä PROMPTIT.md repositoryn juureen.
Tarkistuspiste: Kun tekoäly on tuottanut toimivan ratkaisun (koodin ajaminen onnistuu ja se
täyttää perusvaatimukset), alusta Git-repository.
● Commit #1: Tee commit tästä raa'asta, tekoälyn generoimasta koodista.
● Commit-viesti: Alkuperäinen AI-generoitu commit
Vaihe 2: Ihmisen vuoro
Ota projekti nyt omaan hallintaasi. Vastuu teknisestä toteutuksesta on nyt sinulla. Korjaa asiat,
 jotka tekoälyltä jäi huomaamatta tai jotka se toteutti huonosti. Voit edelleen hyödyntää
tekoälyä, mutta muista jatkaa kehotteiden dokumentointia PROMPTIT.md-tiedostoon.
Katselmoi vaiheessa 1 generoitu koodi. Kiinnitä huomiota esimerkiksi seuraaviin:
● Logiikkavirheet
● Koodin laatu ja luettavuus
● Virheenkäsittely
● Rakenne
Toimenpide: Refaktoroi ja korjaa koodi. Tee jokaisesta korjauksesta oma commit. Voit tehdä niin
monta committia kuin on tarpeen.
Commit-viestit: Käytä selkeitä viestejä, jotka kuvaavat tehdyn korjauksen (esim. ”refaktorointi:
Toiminnallisuus X eriytetty omaan moduuliinsa” tai ”korjaus: Lisätty validointi XYZZY-arvoille”).
Commit-viestit tulee kirjoittaa suomeksi.
Vaihe 3: Analyysi
Luo tiedosto nimeltä ANALYYSI.md. Vastaa siinä seuraaviin kysymyksiin suomeksi:
1. Mitä tekoäly teki hyvin?
2. Mitä tekoäly teki huonosti?
3. Mitkä olivat tärkeimmät parannukset, jotka teit tekoälyn tuottamaan koodiin ja miksi?
Palautettavat materiaalit
Toimita linkki julkisesti saatavilla olevaan Git-repositoryyn (esim.
GitHub/GitLab/Bitbucket:issa), joka sisältää:
● Lähdekoodin
● Täydellisen commit-historian. Älä yhdistä committeja (squash) missään vaiheessa!
● PROMPTIT.md (keskusteluhistoriasi)
● ANALYYSI.md (analyysisi)
Vältä sanaparin ”[poistettu sanapari ohjeen mukaan]” käyttöä repositoryn nimessä tai sisällössä.
Arviointikriteerit
Emme etsi "täydellistä" sovellusta, vaan kiinnitämme huomiota seuraaviin asioihin:
- Kriittinen ajattelu: Huomasitko potentiaaliset bugit tai huonot käytännöt tekoälyn
koodissa?
- Promptien suunnittelu: Miten ohjasit tekoälyä?
- Koodin laatu: Onko lopullinen, refaktoroitu koodisi selkeämpää ja turvallisempaa kuin
tekoälyn alkuperäinen tuotos?
Muita huomioitavaa:
- Avoimuusilmoitus: Saatamme käyttää tekoälypohjaisia työkaluja apuna koodisi ja
 dokumentaatiosi analysoinnissa. Huomioithan, että nämä työkalut tukevat
 tarkastusprosessiamme, mutta lopulliset arviot ja rekrytointipäätökset tekevät aina
 ihmisasiantuntijat.
- Tehtävän työnkulku on suunniteltu tarkoituksella sellaiseksi kuin se on, eikä se
välttämättä vastaa tavanomaista tekoälyavusteista ohjelmistokehitystä.
- Tämä esitehtävä on osa Vincitin [poistettu sanapari ohjeen mukaan] -rekrytointiprosessia ja tarkoitettu vain
henkilökohtaiseen käyttöön. Toivomme, ettet jaa tehtävää tai sen sisältöä muille.
Onnea matkaan!

Assistant:
Toteutan alkuperäisen, toimivan version kokoushuoneiden varaus-API:sta JavaScriptillä ja in-memory-tallennuksella. Teen Express-pohjaisen palvelun, jossa on varauksen luonti, peruutus ja huonekohtaisten varausten listaus, sekä liiketoimintasääntöjen validointi (päällekkäisyys, menneisyys, alku ennen loppua). Dokumentoin oletukset README:hen ja jätän jatkokehityksen/korjaukset vaiheeseen 2.

