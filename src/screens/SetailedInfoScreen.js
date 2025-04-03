import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

const infoListElements = [
    (<ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
        <Image source={require('../assets/img/Frame1.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
            New Discoveries in Astronomy
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            Modern astronomy is evolving rapidly, with scientists making groundbreaking discoveries that expand our understanding of the universe.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🔭 Exoplanets in the Habitable Zone  In 2024, the James Webb Space Telescope detected an atmosphere on exoplanet K2-18b, containing methane and carbon dioxide. This raises the possibility of liquid water and, potentially, life.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            💥 Gravitational Waves from Black Hole Mergers  Astronomers have successfully recorded gravitational waves from black hole mergers, confirming Einstein’s general relativity theory and providing new insights into the nature of spacetime.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🚀 Fast Radio Bursts (FRBs) from Deep Space  Newly detected repeating fast radio bursts (FRBs) suggest unknown cosmic phenomena. Some researchers speculate they may be caused by magnetars or even signals from extraterrestrial civilizations.
        </Text>
        <View style={{marginBottom: 50}}/>
    </ScrollView>),
    (<ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
        <Image source={require('../assets/img/Frame2.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
            Mysteries of Distant Galaxies
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🌀 The Cosmic Web and Hidden Structures  Astronomers have discovered a vast cosmic web of dark matter that connects galaxies, shaping their evolution and movement. This invisible structure plays a key role in the large-scale formation of the universe.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🌟 The Enigma of Quasars  Quasars—supermassive black holes at the centers of distant galaxies—are among the brightest objects in the universe. However, their extreme energy output remains a mystery, with scientists debating how they can grow so massive in relatively short time spans.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🛸 Strange Signals from Other Galaxies  Some galaxies emit unusual radio waves and X-rays that don't match any known astronomical sources. Could they be signs of unknown physical processes—or even advanced civilizations?
        </Text>
        <View style={{marginBottom: 50}}/>
    </ScrollView>),
    (<ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
        <Image source={require('../assets/img/Frame3.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
            The Future of Space Travel
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            As technology advances, humanity is on the verge of a new era in space exploration.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🚀 Colonizing Mars  With missions from NASA and SpaceX aiming for the Red Planet, permanent human settlements on Mars could become a reality in the next few decades. Challenges include radiation exposure, resource management, and sustainable habitats.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🛸 Interstellar Travel: Science Fiction or Reality?  The concept of traveling beyond our solar system is gaining traction. The Breakthrough Starshot initiative, for example, aims to send tiny probes to the Alpha Centauri system at 20% the speed of light using laser propulsion.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🌌 Space Tourism and Commercial Exploration  Private companies like SpaceX, Blue Origin, and Virgin Galactic are working toward making space tourism accessible. The next step? Moon hotels and asteroid mining for rare minerals.
        </Text>
        <View style={{marginBottom: 50}}/>
    </ScrollView>),
    (<ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
        <Image source={require('../assets/img/Frame4.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
            What Do We Know About Black Holes?
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            Black holes remain one of the most mysterious objects in the universe, defying many known laws of physics.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🕳 The Event Horizon and Hawking Radiation  The event horizon is the "point of no return" around a black hole. Stephen Hawking theorized that black holes slowly evaporate by emitting radiation—Hawking radiation—but this has yet to be observed directly.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            📡 The First Image of a Black Hole  In 2019, the Event Horizon Telescope captured the first-ever image of a black hole in the M87 galaxy. This breakthrough confirmed theories about their structure and gravitational pull.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            ⏳ Time Dilation Near Black Holes  According to relativity, time slows down near a black hole. If an astronaut approached the event horizon, they would appear frozen in time from an outside observer's perspective.
        </Text>
        <View style={{marginBottom: 50}}/>
    </ScrollView>),
    (<ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
        <Image source={require('../assets/img/Frame5.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
            Life on Mars: Myth or Reality?
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            The search for life on Mars has fascinated scientists for decades.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🔬 Evidence of Water  Mars has frozen water at its poles and possible underground liquid reservoirs. If microbial life ever existed, it might be found in these hidden water sources.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🛸 Ancient Martian Life?  Meteorites from Mars found on Earth contain organic molecules. While not direct proof of life, they suggest Mars may have once had the right conditions for it.
        </Text>

        <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
            🚀 Human Missions: The Final Test  Planned human missions to Mars in the 2030s will search for biosignatures and test technologies for sustaining human life. Could Mars become our second home?
        </Text>
        <View style={{marginBottom: 50}}/>
    </ScrollView>)
]

function SetailedInfoScreen ({navigation, route}) {
    return infoListElements[route.params.id];
};

export default SetailedInfoScreen;
