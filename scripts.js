
// Prevent auto-scrolling on page load
window.addEventListener("load", function () {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Clear the hash so it doesn't automatically scroll
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const pages = {
    home: `
		<header>
		<div class="hero-floating-shapes">
		<span class="shape circle"></span>
		<span class="shape triangle"></span>
		<span class="shape square"></span>
		</div>

		<div class="hero-text-content">
		<h1>I4.0India@IISc</h1>
		<p>Industry 4.0 Initiative at the Indian Institute of Science</p>
		<a href="#welcome" class="hero-cta-button">Explore More <i class="fas fa-chevron-down"></i></a>
		</div>
		</header>
		
		<section class="container" id="welcome">
		
		
		<!-- Two-column layout -->
		<div style="display: flex; gap: 2rem; flex-wrap: wrap;">
			
			<!-- Left Column: Welcome Text -->
			<div style="flex: 1; min-width: 300px;">
			<h2>Welcome</h2>
			<div class="welcome-body">
				<p>
				Department of Design and Manufacturing, Indian Institute of Science, had initiated in 2014 India's first indigenous smart factory platform. With funding from Department of Heavy Industries (DHI), Government of India under its SAMARTH Udyog Bharat 4.0 programme, this is turning into a complete factory testbed with two parts:
				</p>

				<ul>
				<li>
					<strong>A labour-intensive toolroom</strong> with a connected set of legacy machines that represents the MSMEs of India, and
				</li>
				<li>
					<strong>An automation-intensive factory</strong> that integrates 3D (metal, polymer) printers, metal laser routers, 5 axis CNCs, using industrial robots, collaborative robots and automated guided vehicles.
				</li>
				</ul>

				<p>
				The aim is to demonstrate the power of smart and connected intelligence in enhancing quality, productivity, efficiency, flexibility, and sustainability for manufacturing across sectors and for research into factories of the future.
				</p>
			</div>
			</div>

			<!-- Right Column: News & Events -->
			<div style="flex: 1;">
			<h2>News & Events</h2>
			<div class="events-list" style="flex: 1; min-width: 300px; max-height: 500px; overflow-y: auto; border: 2px solid #ddd; padding: 10px; background-color: var(--light);">
				<div class="event">
				<div class="event-date">
					<span class="month">July</span>
					<span class="year">2023</span>
				</div>
				<div class="event-details">
					<h5>Summer Programme on Design Thinking</h5>
					<p>Short-term Summer Programme and Internship on Design Thinking, Smart Manufacturing, and Incubation at CPDM, IISc.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Jun</span>
					<span class="year">2022</span>
				</div>
				<div class="event-details">
					<h5>Summer Programme on Design Thinking</h5>
					<p>Short-term Summer Programme and Internship on Design Thinking, Smart Manufacturing, and Incubation at CPDM, IISc.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Jun</span>
					<span class="year">2018</span>
				</div>
				<div class="event-details">
					<h5>Industry 4.0 & Additive Manufacturing Workshop</h5>
					<p>Workshop under I4.0India@IISc on Industry 4.0 & Additive Manufacturing at SSCU Auditorium, IISc, with 100+ participants from academia, PSUs, and industry leaders.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Mar</span>
					<span class="year">2019</span>
				</div>
				<div class="event-details">
					<h5>Industry Workshops on I4.0</h5>
					<p>Workshops with industry partners and potential other players on I4.0 technologies.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Feb</span>
					<span class="year">2019</span>
				</div>
				<div class="event-details">
					<h5>Industry Workshops on I4.0</h5>
					<p>Workshops with industry partners and potential other players on I4.0 technologies.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Jan</span>
					<span class="year">2019</span>
				</div>
				<div class="event-details">
					<h5>Industry Workshops on I4.0</h5>
					<p>Workshops with industry partners and potential other players on I4.0 technologies.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Dec</span>
					<span class="year">2018</span>
				</div>
				<div class="event-details">
					<h5>Industry Workshops on I4.0</h5>
					<p>Workshops with industry partners and potential other players on I4.0 technologies.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Nov</span>
					<span class="year">2018</span>
				</div>
				<div class="event-details">
					<h5>Industry Workshops on I4.0</h5>
					<p>Workshops with industry partners and potential other players on I4.0 technologies.</p>
				</div>
				</div>

				<div class="event">
				<div class="event-date">
					<span class="month">Oct</span>
					<span class="year">2018</span>
				</div>
				<div class="event-details">
					<h5>Inauguration & Project Demos</h5>
					<p>Inauguration & project demos of I4.0india@IISc and Industry Workshop on I4.0 & AM Technologies.</p>
				</div>
				</div>


				<!-- More events can go here -->
			</div>
			</div>

		</div>
		</section>

		<section class="smart-intro">
		  <div class="smart-content">
			<div class="smart-icon">
			  <i class="fas fa-industry"></i>
			</div>
			<div class="smart-text">
			  <h3>Manufacturing Made Smarter</h3>
			  <p class="lead">
				Combining manufacturing with smart systems and data analytics
			  </p>
			</div>
		  </div>
		</section>
		<section class="container">
		  <div class="pillars-grid">
			<div class="pillar-card">
			  <div class="icon"><i class="fas fa-microchip"></i></div>
			  <h4 class="pill-title">Smart</h4>
			  <p class="pill-subtitle">Instrumented Data</p>
			</div>

			<div class="pillar-card">
			  <div class="icon"><i class="fas fa-leaf"></i></div>
			  <h4 class="pill-title">Sustainable</h4>
			  <p class="pill-subtitle">Minimise Energy Requirements</p>
			</div>

			<div class="pillar-card">
			  <div class="icon"><i class="fas fa-hard-hat"></i></div>
			  <h4 class="pill-title">Safe</h4>
			  <p class="pill-subtitle">Improve Manufacturing Ergonomics</p>
			</div>
		  </div>
		</section>
		<section class="container">
		  <h2>Mandated Guidelines for CEFC under SAMARTH Udyog</h2>
		  <ul class="guidelines-list">
			<li><i class="fas fa-bullhorn"></i> Awareness campaigns on Industry 4.0</li>
			<li><i class="fas fa-chalkboard-teacher"></i> Training for Master Trainers</li>
			<li><i class="fas fa-lightbulb"></i> Active Participation Provisions for Start-ups/Incubators</li>
			<li><i class="fas fa-hands-helping"></i> Hand-holding of SMEs to implement Industry 4.0 projects (via consultancy services)</li>
			<li><i class="fas fa-university"></i> Collaborating with neighbourhood universities for student training/internships</li>
			<li><i class="fas fa-users"></i> Involving industry in SPV membership model for sustainability</li>
			<li><i class="fas fa-network-wired"></i> Participating in government platforms for common Industry 4.0 agendas</li>
			<li><i class="fas fa-recycle"></i> Making adequate provisions for e-waste management</li>
			<li><i class="fas fa-cubes"></i> Involving as many clusters of Capital Goods as possible</li>
		  </ul>
		</section>

		<section class="partner-section">
		  <div class="partner-card">
		  <h4>Our Partners</h4>
			<div class="partner-logos">
			  <img src="partner logos/DM_Logo.png">
			  <img src="partner logos/Ministry_of_Heavy_Industries_India.svg.png">
			  <img src="partner logos/tata-steel-logo.png">
			  <!--<img src="partner logos/Toyota_logo_(Red).png">
			  
			   Add more logos as needed -->
			</div>
		  </div>
		</section>

      `,
    people: `
		<section class="faculty-showcase container">
			<div class="container">
			<h4>Our Team</h4>
				<p>Domain experts who lead the I4.oIndia@IISc initiative</p>
			</div>
		  <div class="faculty-cards">
			<div class="faculty-card">
			  <div class="card-inner">
				<div class="profile-pic">
				  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Prof. XYZ">
				</div>
				<div class="card-info">
				  <h3>Prof. XYZ</h3>
				  <p class="designation">Lead Faculty, Mechanical Engineering</p>
				</div>
				<div class="card-hover">
				  <p><strong>Research Area:</strong><br>Smart Manufacturing, CPS, Robotics</p>
				</div>
			  </div>
			</div>

			<div class="faculty-card">
			  <div class="card-inner">
				<div class="profile-pic">
				  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Prof. ABC">
				</div>
				<div class="card-info">
				  <h3>Prof. ABC</h3>
				  <p class="designation">Co-Lead, CSA Department</p>
				</div>
				<div class="card-hover">
				  <p><strong>Research Area:</strong><br>AI for Industry, Embedded Systems</p>
				</div>
			  </div>
			</div>

			<div class="faculty-card">
			  <div class="card-inner">
				<div class="profile-pic">
				  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Prof. LMN">
				</div>
				<div class="card-info">
				  <h3>Prof. LMN</h3>
				  <p class="designation">Coordinator, PD&M</p>
				</div>
				<div class="card-hover">
				  <p><strong>Research Area:</strong><br>Additive Manufacturing, PLM</p>
				</div>
			  </div>
			</div>
			<div class="faculty-card">
			  <div class="card-inner">
				<div class="profile-pic">
				  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Prof. LMN">
				</div>
				<div class="card-info">
				  <h3>Prof. LMN</h3>
				  <p class="designation">Coordinator, PD&M</p>
				</div>
				<div class="card-hover">
				  <p><strong>Research Area:</strong><br>Additive Manufacturing, PLM</p>
				</div>
			  </div>
			</div>

		  </div>
		</section>
      `,
    facilities:
        `
		<section class="container">
		<h2>Facilities at the Smart Factory</h2>
		<p>The Smart Factory has the following machines, hardware, and software platforms:</p>

		<div>
			<h3><i class="fas fa-history"></i> Legacy Platform</h3>
			<p>All machines below are instrumented with sensors and connected to their digital twins for real-time assessment of KPIs in quality, productivity, efficiency, flexibility, and sustainability:</p>
			<ul class="guidelines-list">
			<li><i class="fas fa-cogs"></i> Legacy lathes</li>
			<li><i class="fas fa-cogs"></i> Legacy drilling machine</li>
			<li><i class="fas fa-cogs"></i> Legacy milling machine</li>
			<li><i class="fas fa-cogs"></i> Legacy grinding machine</li>
			<li><i class="fas fa-user-cog"></i> Manual assembly station with XSENSE body-suit and assembly tools</li>
			<li><i class="fas fa-search"></i> Manual assembly, measurement and inspection stations</li>
			</ul>
		</div>

		<br>

		<div>
			<h3><i class="fas fa-robot"></i> Automated Platform</h3>
			<p>All machines below are instrumented with sensors and connected to their digital twins for real-time assessment of KPIs in quality, productivity, efficiency, flexibility, and sustainability:</p>
			<ul class="guidelines-list">
			<li><i class="fas fa-cube"></i> Metal 3D Printer</li>
			<li><i class="fas fa-cube"></i> Polymer 3D Printer</li>
			<li><i class="fas fa-bolt"></i> Metal Laser Router</li>
			<li><i class="fas fa-industry"></i> 5-Axis CNC Milling Machine</li>
			<li><i class="fas fa-robot"></i> Industrial Robot</li>
			<li><i class="fas fa-handshake"></i> Collaborative Robot</li>
			<li><i class="fas fa-truck-moving"></i> Automated Guided Vehicle</li>
			</ul>
		</div>

		<br>

		<div>
			<h3><i class="fas fa-digital-tachograph"></i> Digital Twin Platforms</h3>
			<ul class="guidelines-list">
			<li><i class="fas fa-drafting-compass"></i> NX CAD</li>
			<li><i class="fas fa-project-diagram"></i> TeamCenter PLM</li>
			<li><i class="fas fa-network-wired"></i> ThingWorx MES</li>
			<li><i class="fas fa-database"></i> Dimomaint ERP</li>
			</ul>
		</div>
		</section>

		<section class="container">
		<h2>Smart Factory Services</h2>
		<iframe src="PDFs/Smart Factory Services.pdf#navpanes=0" width="100%" height="600" style="border: none;"></iframe>
		</section>
	  `,
    offerings:
        `
		<section class="container">
		<h2>M.Tech. in SMART MANUFACTURING</h2>
		<div class="welcome-body">
		<p>
		We currently have 26 M.Tech. candidates with us, of which twenty were recruited this year. The
		remaining six students have completed one year of training, were recruited last year and have
		undergone 12 courses during this training.</p><p><br>
		Started in 2019, the Master of Technology (MTech) programme is a two-year full-time graduate
		programme that aims to impart education in smart manufacturing and development of new
		manufacturing systems that are innovative and competitive. The programme aims at developing skills,
		knowledge and aptitude among students so that they can have a 360 degree view of manufacturing
		as "physical production at the centre of a wider manufacturing value chain" where "highly agile,
		networked enterprises use information and analytics as skillfully as they employ talent and machinery
		to deliver products and services to diverse global markets". The course is intended to create future
		leaders in manufacturing who not only master the state of the art in current design, manufacturing,
		technology, management and business aspects in the area of smart manufacturing, but also can usher
		in manufacturing innovation in these through creative problem solving and integration of deep
		technology from diverse, multiple disciplines.</p><p><br>
		The MTech programme at CPDM is offered in partnership with faculty members from over twelve
		departments of IISc, and is spread over four semesters and two summer terms. It contains a
		challenging mix of courses and projects in materials, processes, digital manufacturing, design
		methodology, CAD, PLM, sensors, mechatronics, AI, analytics, machine learning, operations
		management, etc. to train students in the technology behind advanced manufacturing at various
		scales of systems (process, machines, factories, enterprises) and production, as well as in innovating
		new manufacturing processes and systems that blend the soft and the hard skills to solve problems
		related to manufacturing industry.</p><p><br>
		Candidates with a bachelor's degree in Engineering or equivalent and with a valid GATE score are
		eligible to apply. Selection is based on GATE score and performance in an interview conducted at the
		centre. The interview tests engineering knowledge, abstract and analytical thinking ability,
		communication ability, and overall aptitude for smart manufacturing.
		The Centre for Product Design and Manufacturing offers industry opportunity for internships during
		summer (two months during May-July each year) and for recruiting students graduating from the
		Master of Technology (M.Tech) course specializing in Smart Manufacturing.	
		</p>

		</div>

		</section>
		



		<section class="container">
			<h2>RESEARCH PROGRAMME in ADVANCED MANUFACTURING</h2>
			<div class="welcome-body">
			<p>
			We currently have 13 PhD candidates with us, of which seven were recruited this year. The remaining
			six students have completed one year of training, were recruited last year and have undergone 4
			courses during this training.</p><br><p>
			The research programme at CPDM (MTech by Research and PhD) in Advanced Manufacturing is
			carried out in a variety of areas, materials and processes, digital manufacturing, manufacturing supply
			chains, sustainable manufacturing, Industry 4.0, controls/autonomous systems and robotics, and
			policy and entrepreneurship in manufacturing. CPDM pioneered research in the area of smart
			manufacturing in India with the initiation of India's first indigenous Smart Factory research platform
			in 2015 in collaboration with The Boeing Company, USA; Boeing is a strategic partner of IISc, similar
			to University Cambridge in the UK and Tshinghua University in China. Equipped with a strong faculty,
			a well-groomed library and an array of sophisticated facilities for prototyping and manufacturing and
			associated research, CPDM has a vibrant atmosphere to develop future leaders in manufacturing
			research.</p><br><p>
			CPDM hosts a technology business incubator (TBI) in MedTech with special focus on Geriatric
			Healthcare funded by KBITS, GOK. The TBI is intended to support innovators via a programme that
			straddles incubation, training and mentorships, as well as having access to four state of the art
			facilities in the areas of mechanical, chemical, biological and user testing. It is also extending its earlier
			work on developing India's first indigenous Smart Factory into a demonstration platform for industry
			called I4.0India@IISc (I for India at IISc). The platform is being developed as a Common Engineering
			Facility Centre (CEFC) under the SAMARTH Udyog Bharat 4.0 programme of the department of Heavy
			Industries, GoI. A major thrust of research at CPDM in manufacturing is developing new processes,
			technologies and tools for supporting development of complex and advanced manufacturing systems.
			For fostering international research into manufacturing in India, CPDM initiated a major conference
			series called I-4AM (pronounced I forum) - International Conference series on Industry 4.0 and
			Advanced Manufacturing. Its first edition will be held during 28-29 June 2019 at Indian Institute of
			Science Bangalore, to deliver international quality at affordable price.</p><br><p>
			Research students are selected thorough a stringent selection procedure comprising a rigorous and
			extensive interview, in order to determine their individual ability and motivation. Based on the
			background of the student, each research student will be allocated a research topic at the time of
			admission, from among the topics of research offered for admission in the year of admission. Each
			student will be jointly supervised by two faculty members among those who are involved in the
			manufacturing programme (see list of faculty members involved in the manufacturing programme
			below).</p><br><p>
			Ph.D. at IISc generally requires three and half years of extensive, in-depth research. A PhD student is
			expected to make major contributions in philosophy, understanding or enhancement of the state of
			the art in manufacturing.</p><br><p>
			MTech by Research [MTech(R)] is generally a two years research course. MTech(R) students are
			required to enrol more courses than that required for PhD students. MTech(R) is a perfect blend of
			course work and research, thus providing students with freedom to take up further either doctoral
			research, join a company where both research and general design are essential, or initiate/join a
			startup.</p>
			</div>
		</section>

		<section class="container">
		<h2>Startup Support</h2>
		<ul class="guidelines-list">
			<li>Embedsense Solutions Pvt Ltd</li>
			<li>ADS Interconnects</li>
			<li>SenseGiz Technologies Pvt Ltd.</li>
			<li>NetObjex</li>
			<li>MatrIoT Solutions Private Limited</li>
			<li>CognetThings Technologies Pvt Ltd</li>
			<li>Hecklab Solutions Private Limited</li>
			<li>FluxGen Engineering Technology</li>
			<li>Axcend Automation and Software Solutions Pvt Ltd</li>
			<li>Credence Robotics LLP</li>
		</ul>
		</section>

	 
	  `,
    past:
        `
		<section class="container">
		<h2>Smart Solutions for MSMEs</h2>

		  <div style="display: flex; gap: 2rem;">
    
			<!-- Left Column: Cards -->
			<div style="flex: 1.2;">
			<div class="card-grid" style="display: flex; flex-direction: column; gap: 1rem;">
				<div class="card active-card" onclick="loadPDF(this, 'PDFs/Automated-Inspection-System.pdf')" style="border: 2px solid #333; cursor: pointer;">Automated Inspection System</div>
				<div class="card" onclick="loadPDF(this, 'PDFs/PCB-Inspection-System.pdf')" style="cursor: pointer;">PCB Inspection System</div>
				<div class="card" onclick="loadPDF(this, 'PDFs/Smart_Incoming-Inspection-System.pdf')" style="cursor: pointer;">Smart Incoming Inspection System</div>
				<div class="card" onclick="loadPDF(this, 'PDFs/Smart_Multi-Material_Resource_Bin.pdf')" style="cursor: pointer;">Smart Multi-Material Resource Bin</div>
			</div>
			</div>

			<!-- Right Column: PDF Viewer -->
			<div style="flex: 1.8;">
			<iframe id="pdfViewer" src="PDFs/Automated-Inspection-System.pdf#navpanes=0" width="100%" height="400" style="border: none; display: block;"></iframe>
			</div>

		</div>
		</section>
		</section>
		<section class="container">
		<h2>In-house R&D</h2>

		<div style="display: flex; gap: 2rem;">
			
			<!-- Left Column: Cards -->
			<div style="flex: 1.8;">
			<iframe id="pdfViewer2" src="PDFs/3D-Metal-printing.pdf#navpanes=0" width="100%" height="500" style="border: none; display: block;"></iframe>
			</div>

			<!-- Right Column: PDF Viewer -->
			<div style="flex: 1.2;">
			<div class="card-grid" style="display: flex; flex-direction: column; gap: 1rem;">
				<div class="card active-card" onclick="loadPDF2(this, 'PDFs/3D-Metal-printing.pdf')" style="border: 2px solid #333; cursor: pointer;">3d Metal Printing</div>
				<div class="card" onclick="loadPDF2(this, 'PDFs/Certification_by_I4.0.pdf')" style="cursor: pointer;">Certification by I4.0</div>
				<div class="card" onclick="loadPDF2(this, 'PDFs/RFID-positioning.pdf')" style="cursor: pointer;">RFID Positioning</div>
				<div class="card" onclick="loadPDF2(this, 'PDFs/Smart-Sustainability-Assessment2.pdf')" style="cursor: pointer;">Smart Sustainability Assessment</div>
				<div class="card" onclick="loadPDF2(this, 'PDFs/Mixed-Reality-Digital-Twin.pdf')" style="cursor: pointer;">Mixed-Reality Digital Twin</div>
				<div class="card" onclick="loadPDF2(this, 'PDFs/Smart_Sensor-Dashboard.pdf')" style="cursor: pointer;">Smart Sensor Dashboard</div>
			</div>
			</div>

		</div>
		</section>
		<section class="container">
		<h2>Industry-Sponsored R&amp;D</h2>
		<ul class="guidelines-list">
			<li>Project with TKM: Automated Ergonomic Assessment</li>
			<li>Projects with Faurecia: Real-time Air Quality and Emission Monitoring (Sustainability)</li>
			<li>Project with Yaskawa: Study of Imitation Learning Approaches to Train Robot Arms</li>
			<li>
			Project with TCS:
			<ol>
				<li>&#9656;Smart Wearables for Worker Health Monitoring on Shop Floors (Safety)</li>
				<li>&#9656;Portable Water Purifier with IoT-Enabled Mapping and Feedback on Quality (Quality)</li>
				<li>&#9656;Smart Imaging System for Security and Surveillance Applications (Safety)</li>
			</ol>
			</li>
		</ul>
		</section>
	  `,
    contact: `
        <h2>Contact Us</h2>
        <div class="card">
          <p>Email: <a href="mailto:smartmfgiisc@iisc.ac.in">smartmfgiisc@iisc.ac.in</a></p>
          <p>Phone: +91-80-2293-XXXX</p>
          <p>Location: Demo & Development Cell, Department of Mechanical Engineering, IISc Bangalore</p>
        </div>
      `
};

function loadPage(page, el) {
    document.getElementById('main-content').innerHTML = pages[page];

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}
// Load default
loadPage('home', document.querySelector('nav a.active'));

function loadPDF(clickedCard, pdfPath) {
    const iframe = document.getElementById('pdfViewer');
    iframe.src = pdfPath + '#navpanes=0';
    iframe.style.display = 'block';

    // Remove active styling from all cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.border = '0px solid #ccc';
    });

    // Apply active styling to clicked card
    clickedCard.style.border = '2px solid #333';
}
function loadPDF2(clickedCard, pdfPath) {
    const iframe2 = document.getElementById('pdfViewer2');
    iframe2.src = pdfPath + '#navpanes=0';
    iframe2.style.display = 'block';
    // Remove active styling from all cards
    const allCards2 = document.querySelectorAll('.card');
    allCards2.forEach(card => {
        card.style.border = '0px solid #ccc';
    });

    // Apply active styling to clicked card
    clickedCard.style.border = '2px solid #333';
}
