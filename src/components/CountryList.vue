<template>
    <div id="list">
        <img src="../assets/earth.png"/>
        <h1>List of Countries</h1>
        <p>In this page I will list the countries by A-Z</p>
      <paginate
        name="country_data"
        :list="countries"
        :per="10">
        <table align="center" border="1">
            <tr>
                <th>Country Name</th>
                <th>Country Continent</th>
            </tr>
            <tr v-for="country in paginated('country_data')">
                <td>{{country.country}}</td>
                <td>{{country.continent}}</td>
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
        color: white;
        display: inline-block;">
      </paginate-links>
    </div>
</template>

<script>
    export default {
      name: "CountryList",
        data () {
            return {
                countries: [
                    { country: 'Afghanistan', continent: 'Asia' },
                    { country: 'Albania', continent: 'Europe' },
                    { country: 'Algeria', continent: 'Africa' },
                    { country: 'Andorra', continent: 'Europe' },
                    { country: 'Angola', continent: 'Africa' },
                    { country: 'Antigua and Barbuda', continent: 'America' },
                    { country: 'Argentina', continent: 'America' },
                    { country: 'Armenia', continent: 'Asia' },
                    { country: 'Australia', continent: 'Oceania' },
                    { country: 'Austria', continent: 'Europe' },
                    { country: 'Azerbaijan', continent: 'Asia' },
                    { country: 'The Bahamas', continent: 'America' },
                    { country: 'Bahrain', continent: 'Asia' },
                    { country: 'Bangladesh', continent: 'Asia' },
                    { country: 'Barbados', continent: 'America' },
                    { country: 'Belarus', continent: 'Europe' },
                    { country: 'Belgium', continent: 'Europe' },
                    { country: 'Belize', continent: 'America' },
                    { country: 'Benin', continent: 'Africa' },
                    { country: 'Bhutan', continent: 'Asia' },
                    { country: 'Bolivia', continent: 'America' },
                    { country: 'Bosnia and Herzegovina', continent: 'Europe' },
                    { country: 'Botswana', continent: 'Africa' },
                    { country: 'Brazil', continent: 'America' },
                    { country: 'Brunei', continent: 'Asia' },
                    { country: 'Bulgaria', continent: 'Europe' },
                    { country: 'Burkina Faso', continent: 'Africa' },
                    { country: 'Burundi', continent: 'Africa' },
                    { country: 'Cambodia', continent: 'Asia' },
                    { country: 'Cameroon', continent: 'Africa' },
                    { country: 'Canada', continent: 'America' },
                    { country: 'Cape Verde', continent: 'Africa' },
                    { country: 'Central African Republic', continent: 'Africa' },
                    { country: 'Chad', continent: 'Africa' },
                    { country: 'Chile', continent: 'America' },
                    { country: 'China', continent: 'Asia' },
                    { country: 'Colombia', continent: 'America' },
                    { country: 'Comoros', continent: 'Africa' },
                    { country: 'Democratic Republic of the Congo', continent: 'Africa' },
                    { country: 'Republic of the Congo', continent: 'Africa' },
                    { country: 'Costa Rica', continent: 'America' },
                    { country: 'Croatia', continent: 'Europe' },
                    { country: 'Cuba', continent: 'America' },
                    { country: 'Cyprus', continent: 'Europe' },
                    { country: 'Czech Republic', continent: 'Europe' },
                    { country: 'Denmark', continent: 'Europe' },
                    { country: 'Djibouti', continent: 'Africa' },
                    { country: 'Dominica', continent: 'America' },
                    { country: 'Dominican Republic', continent: 'America' },
                    { country: 'East Timor', continent: 'Asia' },
                    { country: 'Ecuador', continent: 'America' },
                    { country: 'Egypt', continent: 'Africa' },
                    { country: 'El Salvador', continent: 'America' },
                    { country: 'Equatorial Guinea', continent: 'Africa' },
                    { country: 'Eritrea', continent: 'Africa' },
                    { country: 'Estonia', continent: 'Europe' },
                    { country: 'Ethiopia', continent: 'Africa' },
                    { country: 'Fiji', continent: 'Oceania' },
                    { country: 'Finland', continent: 'Europe' },
                    { country: 'France', continent: 'Europe' },
                    { country: 'Gabon', continent: 'Africa' },
                    { country: 'The Gambia', continent: 'Africa' },
                    { country: 'Georgia', continent: 'Asia' },
                    { country: 'Germany', continent: 'Europe' },
                    { country: 'Ghana', continent: 'Africa' },
                    { country: 'Greece', continent: 'Europe' },
                    { country: 'Grenada', continent: 'America' },
                    { country: 'Guatemala', continent: 'America' },
                    { country: 'Guinea', continent: 'Africa' },
                    { country: 'Guinea-Bissau', continent: 'Africa' },
                    { country: 'Guyana', continent: 'America' },
                    { country: 'Haiti', continent: 'America' },
                    { country: 'Honduras', continent: 'America' },
                    { country: 'Hungary', continent: 'Europe' },
                    { country: 'Iceland', continent: 'Europe' },
                    { country: 'India', continent: 'Asia' },
                    { country: 'Indonesia', continent: 'Asia' },
                    { country: 'Iran', continent: 'Asia' },
                    { country: 'Iraq', continent: 'Asia' },
                    { country: 'Ireland', continent: 'Europe' },
                    { country: 'Israel', continent: 'Asia' },
                    { country: 'Italy', continent: 'Europe' },
                    { country: 'Ivory Coast', continent: 'Africa' },
                    { country: 'Jamaica', continent: 'America' },
                    { country: 'Japan', continent: 'Asia' },
                    { country: 'Jordan', continent: 'Asia' },
                    { country: 'Kazakhstan', continent: 'Asia' },
                    { country: 'Kenya', continent: 'Africa' },
                    { country: 'Kiribati', continent: 'Oceania' },
                    { country: 'North Korea', continent: 'Asia' },
                    { country: 'South Korea', continent: 'Asia' },
                    { country: 'Kuwait', continent: 'Asia' },
                    { country: 'Kyrgyzstan', continent: 'Asia' },
                    { country: 'Laos', continent: 'Asia' },
                    { country: 'Latvia', continent: 'Europe' },
                    { country: 'Lebanon', continent: 'Asia' },
                    { country: 'Lesotho', continent: 'Africa' },
                    { country: 'Liberia', continent: 'Africa' },
                    { country: 'Libya', continent: 'Africa' },
                    { country: 'Liechtenstein', continent: 'Europe' },
                    { country: 'Lithuania', continent: 'Europe' },
                    { country: 'Luxembourg', continent: 'Europe' },
                    { country: 'Macedonia', continent: 'Europe' },
                    { country: 'Madagascar', continent: 'Africa' },
                    { country: 'Malawi', continent: 'Africa' },
                    { country: 'Malaysia', continent: 'Asia' },
                    { country: 'Maldives', continent: 'Asia' },
                    { country: 'Mali', continent: 'Africa' },
                    { country: 'Malta', continent: 'Europe' },
                    { country: 'Marshall Islands', continent: 'Oceania' },
                    { country: 'Mauritania', continent: 'Africa' },
                    { country: 'Mauritius', continent: 'Africa' },
                    { country: 'Mexico', continent: 'America' },
                    { country: 'Micronesia', continent: 'Oceania' },
                    { country: 'Moldova', continent: 'Europe' },
                    { country: 'Monaco', continent: 'Europe' },
                    { country: 'Mongolia', continent: 'Asia' },
                    { country: 'Montenegro', continent: 'Europe' },
                    { country: 'Morocco', continent: 'Africa' },
                    { country: 'Mozambique', continent: 'Africa' },
                    { country: 'Myanmar', continent: 'Asia' },
                    { country: 'Namibia', continent: 'Africa' },
                    { country: 'Nauru', continent: 'Oceania' },
                    { country: 'Nepal', continent: 'Asia' },
                    { country: 'Netherlands', continent: 'Europe' },
                    { country: 'New Zealand', continent: 'Oceania' },
                    { country: 'Nicaragua', continent: 'America' },
                    { country: 'Niger', continent: 'Africa' },
                    { country: 'Nigeria', continent: 'Africa' },
                    { country: 'Norway', continent: 'Europe' },
                    { country: 'Oman', continent: 'Asia' },
                    { country: 'Pakistan', continent: 'Asia' },
                    { country: 'Palau', continent: 'Oceania' },
                    { country: 'Palestine', continent: 'Asia' },
                    { country: 'Panama', continent: 'America' },
                    { country: 'Papua New Guinea', continent: 'Oceania' },
                    { country: 'Paraguay', continent: 'America' },
                    { country: 'Peru', continent: 'America' },
                    { country: 'Philippines', continent: 'Asia' },
                    { country: 'Poland', continent: 'Europe' },
                    { country: 'Portugal', continent: 'Europe' },
                    { country: 'Qatar', continent: 'Asia' },
                    { country: 'Romania', continent: 'Europe' },
                    { country: 'Russia', continent: 'Europe' },
                    { country: 'Rwanda', continent: 'Africa' },
                    { country: 'Saint Kitts and Nevis', continent: 'America' },
                    { country: 'Saint Lucia', continent: 'America' },
                    { country: 'Saint Vincent and the Grenadines', continent: 'America' },
                    { country: 'Samoa', continent: 'Oceania' },
                    { country: 'San Marino', continent: 'Europe' },
                    { country: 'Sao Tomé and Príncipe', continent: 'Africa' },
                    { country: 'Saudi Arabia', continent: 'Asia' },
                    { country: 'Senegal', continent: 'Africa' },
                    { country: 'Serbia', continent: 'Europe' },
                    { country: 'Seychelles', continent: 'Africa' },
                    { country: 'Sierra Leone', continent: 'Africa' },
                    { country: 'Singapore', continent: 'Asia' },
                    { country: 'Slovakia', continent: 'Europe' },
                    { country: 'Slovenia', continent: 'Europe' },
                    { country: 'Solomon Islands', continent: 'Oceania' },
                    { country: 'Somalia', continent: 'Africa' },
                    { country: 'South Africa', continent: 'Africa' },
                    { country: 'South Sudan', continent: 'Africa' },
                    { country: 'Spain', continent: 'Europe' },
                    { country: 'Sri Lanka', continent: 'Asia' },
                    { country: 'Sudan', continent: 'Africa' },
                    { country: 'Suriname', continent: 'America' },
                    { country: 'Swaziland', continent: 'Africa' },
                    { country: 'Sweden', continent: 'Europe' },
                    { country: 'Switzerland', continent: 'Europe' },
                    { country: 'Tajikistan', continent: 'Asia' },
                    { country: 'Tanzania', continent: 'Africa' },
                    { country: 'Thailand', continent: 'Asia' },
                    { country: 'Togo', continent: 'Africa' },
                    { country: 'Tonga', continent: 'Oceania' },
                    { country: 'Trinidad and Tobago', continent: 'America' },
                    { country: 'Tunisia', continent: 'Africa' },
                    { country: 'Turkey', continent: 'Asia' },
                    { country: 'Turkmenistan', continent: 'Asia' },
                    { country: 'Tuvalu', continent: 'Oceania' },
                    { country: 'Uganda', continent: 'Africa' },
                    { country: 'Ukraine', continent: 'Europe' },
                    { country: 'United Arab Emirates', continent: 'Asia' },
                    { country: 'United Kingdom', continent: 'Europe' },
                    { country: 'United States of America', continent: 'America' },
                    { country: 'Uruguay', continent: 'America' },
                    { country: 'Uzbekistan', continent: 'Asia' },
                    { country: 'Vanuatu', continent: 'Oceania' },
                    { country: 'Vatican City', continent: 'Europe' },
                    { country: 'Venezuela', continent: 'America' },
                    { country: 'Vietnam', continent: 'Asia' },
                    { country: 'Yemen', continent: 'Asia' },
                    { country: 'Zambia', continent: 'Africa' },
                    { country: 'Zimbabwe', continent: 'Africa' }
                ],
              paginate: ['country_data']
            }
        }
    }
</script>

<style scoped>
    #list {
        background-color: #0000ff;
    }
    h1 {
        font-weight: normal;
        color: white;
    }
    p{
        font-weight: normal;
        color: white;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        color: white;
        border-color: black;
    }
</style>
