<template>
    <div id="list">
        <img src="../assets/olympics.png"/>
        <h1>List of Olympic Medals by Countries</h1>
        <p>In this page I will list the countries by total Olympic medals</p>
      <paginate
        name="country_data"
        :list="countries"
        :per="10">
        <table align="center" border="1">
            <tr>
                <th>Country Name</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
            </tr>
            <tr v-for="country in paginated('country_data')">
                <td>{{country.country}}</td>
                <td>{{country.gold}}</td>
                <td>{{country.silver}}</td>
                <td>{{country.bronze}}</td>
                <td>{{country.total}}</td>
            </tr>
        </table>
      </paginate>
      <paginate-links
        for="country_data"
        :show-step-links="true"
        style="
        list-style-type: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        color: black;
        display: inline-block;">
      </paginate-links>
    </div>
</template>

<script>
    export default {
        name: "OlympicList",
        data () {
            return {
                countries: [
                    { country: 'Unites States of America', gold: 1118, silver: 897, bronze: 789, total: 2804 },
                    { country: 'Russia', gold: 722, silver: 580, bronze: 583, total: 1884 },
                    { country: 'Germany', gold: 564, silver: 577, bronze: 582, total: 1723 },
                    { country: 'United Kingdom', gold: 273, silver: 299, bronze: 303, total: 875 },
                    { country: 'France', gold: 243, silver: 272, bronze: 310, total: 825 },
                    { country: 'Italy', gold: 243, silver: 212, bronze: 236, total: 691 },
                    { country: 'Sweden', gold: 195, silver: 210, bronze: 233, total: 638 },
                    { country: 'China', gold: 236, silver: 189, bronze: 174, total: 599 },
                    { country: 'Australia', gold: 155, silver: 170, bronze: 196, total: 521 },
                    { country: 'Hungary', gold: 175, silver: 149, bronze: 173, total: 497 },
                    { country: 'Japan', gold: 152, silver: 152, bronze: 180, total: 484 },
                    { country: 'Norway', gold: 174, silver: 160, bronze: 147, total: 481 },
                    { country: 'Canada', gold: 126, silver: 158, bronze: 188, total: 472 },
                    { country: 'Finland', gold: 143, silver: 147, bronze: 174, total: 464 },
                    { country: 'Netherlands', gold: 122, silver: 130, bronze: 143, total: 395 },
                    { country: 'Switzerland', gold: 100, silver: 115, bronze: 115, total: 330 },
                    { country: 'South Korea', gold: 116, silver: 104, bronze: 100, total: 320 },
                    { country: 'Romania', gold: 89, silver: 95, bronze: 123, total: 307 },
                    { country: 'Austria', gold: 77, silver: 111, bronze: 117, total: 305 },
                    { country: 'Poland', gold: 74, silver: 90, bronze: 140, total: 304 },
                    { country: 'Czech Republic', gold: 73, silver: 84, bronze: 95, total: 252 },
                    { country: 'Cuba', gold: 78, silver: 68, bronze: 79, total: 225 },
                    { country: 'Bulgaria', gold: 52, silver: 89, bronze: 83, total: 224 },
                    { country: 'Denmark', gold: 45, silver: 75, bronze: 75, total: 195 },
                    { country: 'Belgium', gold: 41, silver: 54, bronze: 58, total: 153 },
                    { country: 'Spain', gold: 46, silver: 64, bronze: 42, total: 152 },
                    { country: 'Brazil', gold: 30, silver: 36, bronze: 62, total: 128 },
                    { country: 'Ukraine', gold: 37, silver: 31, bronze: 60, total: 128 },
                    { country: 'New Zealand', gold: 46, silver: 28, bronze: 44, total: 118 },
                    { country: 'Greece', gold: 33, silver: 43, bronze: 40, total: 116 },
                    { country: 'Kenya', gold: 31, silver: 38, bronze: 33, total: 102 },
                    { country: 'Serbia', gold: 28, silver: 37, bronze: 34, total: 99 },
                    { country: 'Belarus', gold: 18, silver: 31, bronze: 44, total: 93 },
                    { country: 'Turkey', gold: 39, silver: 24, bronze: 28, total: 91 },
                    { country: 'South Africa', gold: 26, silver: 31, bronze: 29, total: 86 },
                    { country: 'Jamaica', gold: 22, silver: 35, bronze: 22, total: 79 },
                    { country: 'Argentina', gold: 21, silver: 25, bronze: 28, total: 74 },
                    { country: 'Iran', gold: 19, silver: 22, bronze: 28, total: 69 },
                    { country: 'Kazakhstan', gold: 16, silver: 23, bronze: 30, total: 69 },
                    { country: 'Mexico', gold: 13, silver: 24, bronze: 32, total: 69 },
                    { country: 'North Korea', gold: 16, silver: 17, bronze: 23, total: 56 },
                    { country: 'Ethiopia', gold: 22, silver: 11, bronze: 20, total: 53 },
                    { country: 'Croatia', gold: 15, silver: 16, bronze: 13, total: 44 },
                    { country: 'Azerbaijan', gold: 7, silver: 11, bronze: 25, total: 43 },
                    { country: 'Estonia', gold: 13, silver: 11, bronze: 17, total: 41 },
                    { country: 'Slovenia', gold: 7, silver: 12, bronze: 19, total: 38 },
                    { country: 'Georgia', gold: 8, silver: 8, bronze: 17, total: 33 },
                    { country: 'Slovakia', gold: 11, silver: 14, bronze: 8, total: 33 },
                    { country: 'Thailand', gold: 9, silver: 8, bronze: 16, total: 33 },
                    { country: 'Egypt', gold: 7, silver: 10, bronze: 15, total: 32 },
                    { country: 'Indonesia', gold: 7, silver: 13, bronze: 12, total: 32 },
                    { country: 'Uzbekistan', gold: 9, silver: 6, bronze: 17, total: 32 },
                    { country: 'Ireland', gold: 9, silver: 10, bronze: 12, total: 31 },
                    { country: 'Colombia', gold: 5, silver: 9, bronze: 14, total: 28 },
                    { country: 'India', gold: 9, silver: 7, bronze: 12, total: 28 },
                    { country: 'Latvia', gold: 3, silver: 15, bronze: 8, total: 26 },
                    { country: 'Mongolia', gold: 2, silver: 10, bronze: 14, total: 26 },
                    { country: 'Lithuania', gold: 6, silver: 7, bronze: 12, total: 25 },
                    { country: 'Nigeria', gold: 3, silver: 10, bronze: 12, total: 25 },
                    { country: 'Portugal', gold: 4, silver: 8, bronze: 12, total: 24 },
                    { country: 'Taiwan', gold: 5, silver: 7, bronze: 12, total: 24 },
                    { country: 'Morocco', gold: 6, silver: 5, bronze: 12, total: 23 },
                    { country: 'Trinidad and Tobago', gold: 2, silver: 6, bronze: 11, total: 19 },
                    { country: 'Algeria', gold: 5, silver: 4, bronze: 8, total: 17 },
                    { country: 'Venezuela', gold: 2, silver: 3, bronze: 10, total: 15 },
                    { country: 'Armenia', gold: 2, silver: 6, bronze: 6, total: 14 },
                    { country: 'Bahamas', gold: 6, silver: 2, bronze: 6, total: 14 },
                    { country: 'Chile', gold: 2, silver: 7, bronze: 4, total: 13 },
                    { country: 'Tunisia', gold: 4, silver: 2, bronze: 7, total: 13 },
                    { country: 'Malaysia', gold: 0, silver: 7, bronze: 4, total: 11 },
                    { country: 'Pakistan', gold: 3, silver: 3, bronze: 4, total: 10 },
                    { country: 'Philippines', gold: 0, silver: 3, bronze: 7, total: 10 },
                    { country: 'Uruguay', gold: 2, silver: 2, bronze: 6, total: 10 },
                    { country: 'Israel', gold: 1, silver: 1, bronze: 7, total: 9 },
                    { country: 'Liechtenstein', gold: 2, silver: 2, bronze: 5, total: 9 },
                    { country: 'Puerto Rico', gold: 1, silver: 2, bronze: 6, total: 9 },
                    { country: 'Zimbabwe', gold: 3, silver: 4, bronze: 1, total: 8 },
                    { country: 'Dominican Republic', gold: 3, silver: 2, bronze: 2, total: 7 },
                    { country: 'Uganda', gold: 2, silver: 3, bronze: 3, total: 7 },
                    { country: 'Cameroon', gold: 3, silver: 1, bronze: 2, total: 6 }
                ],
              paginate: ['country_data']
            }
        }
    }
</script>

<style scoped>
    #list {
        background-color: lavender;
    }
    img {
        width: 100%;
        height: 400px;
    }
    h1 {
        font-weight: normal;
    }
    p{
        font-weight: normal;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
</style>
