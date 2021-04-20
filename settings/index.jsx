function mySettings(props) {
   
  return (
    <Page>
      <Section
        title={<Text bold align="center">Choose Colour</Text>}>

        <ColorSelect
          settingsKey="color"
          colors={[
          {color: "black"},
          {color: "darkgray"},
          {color: "lightgray"},
          {color: "white"},
          {color: "wheat"},
          {color: "darkseagreen"},
          {color: "forestgreen"},          
          {color: "blue"},
          {color: "deepskyblue"},
          {color: "cadetblue"},
          {color: "cyan"},
          {color: "red"},
          {color: "darkred"},
          {color: "magenta"},
          {color: "plum"},
          {color: "purple"},
          {color: "brown"},
          {color: "maroon"}            
          ]}
        />
      </Section>


      <Section>
        <Select
          label={`Secondary Timezone`}
          settingsKey="offsetTime"
          options={[
          {name:"(GMT -12:00) Eniwetok, Kwajalein", value: "-12.0"},
          {name:"(GMT -11:00) Midway Island, Samoa", value: "-11.0"},
          {name:"(GMT -10:00) Hawaii", value: "-10.0"},
          {name:"(GMT -9:00) Alaska", value: "-09.0"},
          {name:"(GMT -8:00) Pacific Time (US & Canada)", value: "-08.0"},           
          {name:"(GMT -7:00) Mountain Time (US & Canada)", value: "-07.0"},
          {name:"(GMT -6:00) Central Time (US & Canada), Mexico City", value: "-06.0"},  
          {name:"(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima", value: "-05.0"},
          {name:"(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz", value: "-04.0"},
          {name:"(GMT -3:30) Newfoundland", value: "-03.5"},
          {name:"(GMT -3:00) Brazil, Buenos Aires, Georgetown", value: "-03.0"},
          {name:"(GMT -2:00) Mid-Atlantic", value: "-02.0"},
          {name:"(GMT -1:00) Azores, Cape Verde Islands", value: "-01.0"},
          {name:"(GMT  0.0) Western Europe Time, London, Lisbon, Casablanca", value: "+0.0"},
          {name:"(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value: "+01.0"},
          {name:"(GMT +2:00) Kaliningrad, South Africa", value: "+02.0"},           
          {name:"(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg", value: "+03.0"},
          {name:"(GMT +3:30) Tehran", value: "+03.5"},
          {name:"(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04.0"},
          {name:"(GMT +4:30) Kabul", value: "+04.5"},
          {name:"(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent", value: "+05.0"},
          {name:"(GMT +5:30) Mumbai, Kolkata, Chennai, New Delhi", value: "+05.5"},
          {name:"(GMT +6:00) Almaty, Dhaka, Colombo", value: "+06.0"},
          {name:"(GMT +7:00) Bangkok, Hanoi, Jakarta", value: "+07.0"},
          {name:"(GMT +7:30)", value: "+07.5"},
          {name:"(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value: "+08.0"},
          {name:"(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value: "+09.0"},
          {name:"(GMT +9:30) Adelaide, Darwin", value: "+09.5"},
          {name:"(GMT +10:00) Eastern Australia, Guam, Vladivostok", value: "+10.0"},
          {name:"(GMT +11:00) Magadan, Solomon Islands, New Caledonia", value: "+11.0"},
          {name:"(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka", value: "+12.0"},
        ]}
        />
      </Section>
  </Page>
  );  
}

registerSettingsPage(mySettings);
