  
        // Authentication credentials
        const credentials = {
            username: 'admin',
            password: 'admin123'
        };

        // Login form handler
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === credentials.username && password === credentials.password) {
                document.getElementById('errorMessage').style.display = 'none';
                document.getElementById('loginPage').style.display = 'none';
                document.getElementById('dashboard').classList.add('active');
                document.getElementById('loggedUser').textContent = username.charAt(0).toUpperCase() + username.slice(1);
            } else {
                document.getElementById('errorMessage').style.display = 'block';
            }
        });

        // Logout function
        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                document.getElementById('dashboard').classList.remove('active');
                document.getElementById('loginPage').style.display = 'flex';
                document.getElementById('loginForm').reset();
                document.getElementById('errorMessage').style.display = 'none';
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('dashboard').classList.toggle('mobile-menu-open');
        }

        // Data
        let data = {
            teachers: [
                { id: 1, name: 'John Smith', email: 'john@school.com', department: 'Mathematics' },
                { id: 2, name: 'Sarah Johnson', email: 'sarah@school.com', department: 'Science' }
            ],
            hods: [
                { id: 1, name: 'Dr. Michael Davis', email: 'michael@school.com', department: 'Mathematics' }
            ],
            departments: [
                { id: 1, name: 'Mathematics', hod: 'Dr. Michael Davis', teachers: 12 },
                { id: 2, name: 'Science', hod: 'Dr. Emily Chen', teachers: 10 },
                { id: 3, name: 'English', hod: 'Prof. James Lee', teachers: 8 }
            ],
            firstYear: {
                CSE: {
                    name: 'Computer Science Engineering',
                    teachers: [
                        { name: 'Dr. Rajesh Kumar', subject: 'Programming in C', email: 'rajesh@school.com' },
                        { name: 'Prof. Anjali Sharma', subject: 'Data Structures', email: 'anjali@school.com' },
                        { name: 'Dr. Vikram Singh', subject: 'Mathematics-I', email: 'vikram@school.com' },
                        { name: 'Prof. Priya Patel', subject: 'Physics', email: 'priya@school.com' },
                        { name: 'Dr. Amit Verma', subject: 'Digital Logic', email: 'amit@school.com' }
                    ],
                    students: [
                        { name: 'Rahul Sharma', progress: 85, attendance: 92, scores: { prog: 88, ds: 82, math: 85, phy: 86, dl: 84 }, subjectAttendance: { prog: 95, ds: 90, math: 92, phy: 88, dl: 93 } },
                        { name: 'Priya Gupta', progress: 92, attendance: 96, scores: { prog: 95, ds: 90, math: 92, phy: 91, dl: 92 }, subjectAttendance: { prog: 98, ds: 96, math: 97, phy: 94, dl: 95 } },
                        { name: 'Amit Kumar', progress: 78, attendance: 78, scores: { prog: 75, ds: 80, math: 78, phy: 77, dl: 80 }, subjectAttendance: { prog: 80, ds: 78, math: 76, phy: 75, dl: 81 } },
                        { name: 'Sneha Reddy', progress: 88, attendance: 90, scores: { prog: 90, ds: 86, math: 88, phy: 87, dl: 89 }, subjectAttendance: { prog: 92, ds: 89, math: 91, phy: 88, dl: 90 } },
                        { name: 'Rohan Patel', progress: 82, attendance: 85, scores: { prog: 80, ds: 84, math: 82, phy: 81, dl: 83 }, subjectAttendance: { prog: 87, ds: 84, math: 86, phy: 82, dl: 85 } }
                    ]
                },
                IT: {
                    name: 'Information Technology',
                    teachers: [
                        { name: 'Dr. Suresh Iyer', subject: 'Web Technologies', email: 'suresh@school.com' },
                        { name: 'Prof. Kavita Nair', subject: 'Database Systems', email: 'kavita@school.com' },
                        { name: 'Dr. Arun Joshi', subject: 'Mathematics-I', email: 'arun@school.com' },
                        { name: 'Prof. Deepa Singh', subject: 'Physics', email: 'deepa@school.com' },
                        { name: 'Dr. Manoj Kumar', subject: 'Computer Networks', email: 'manoj@school.com' }
                    ],
                    students: [
                        { name: 'Neha Singh', progress: 86, attendance: 88, scores: { web: 88, db: 84, math: 86, phy: 85, net: 87 }, subjectAttendance: { web: 90, db: 86, math: 89, phy: 87, net: 88 } },
                        { name: 'Karan Mehta', progress: 80, attendance: 82, scores: { web: 82, db: 78, math: 80, phy: 81, net: 79 }, subjectAttendance: { web: 84, db: 80, math: 83, phy: 81, net: 82 } },
                        { name: 'Pooja Desai', progress: 90, attendance: 94, scores: { web: 92, db: 88, math: 90, phy: 91, net: 89 }, subjectAttendance: { web: 96, db: 93, math: 95, phy: 92, net: 94 } },
                        { name: 'Vivek Pandey', progress: 75, attendance: 75, scores: { web: 76, db: 74, math: 75, phy: 74, net: 76 }, subjectAttendance: { web: 77, db: 73, math: 76, phy: 74, net: 75 } },
                        { name: 'Anita Rao', progress: 84, attendance: 87, scores: { web: 86, db: 82, math: 84, phy: 83, net: 85 }, subjectAttendance: { web: 89, db: 85, math: 88, phy: 86, net: 87 } }
                    ]
                },
                Civil: {
                    name: 'Civil Engineering',
                    teachers: [
                        { name: 'Dr. Ramesh Pillai', subject: 'Engineering Mechanics', email: 'ramesh@school.com' },
                        { name: 'Prof. Lakshmi Menon', subject: 'Building Materials', email: 'lakshmi@school.com' },
                        { name: 'Dr. Sunil Reddy', subject: 'Mathematics-I', email: 'sunil@school.com' },
                        { name: 'Prof. Meera Nair', subject: 'Physics', email: 'meera@school.com' },
                        { name: 'Dr. Praveen Kumar', subject: 'Surveying', email: 'praveen@school.com' }
                    ],
                    students: [
                        { name: 'Arjun Nair', progress: 76, attendance: 80, scores: { mech: 78, mat: 74, math: 76, phy: 75, surv: 77 }, subjectAttendance: { mech: 82, mat: 78, math: 81, phy: 79, surv: 80 } },
                        { name: 'Divya Iyer', progress: 82, attendance: 86, scores: { mech: 84, mat: 80, math: 82, phy: 81, surv: 83 }, subjectAttendance: { mech: 88, mat: 84, math: 87, phy: 85, surv: 86 } },
                        { name: 'Ravi Shankar', progress: 70, attendance: 72, scores: { mech: 72, mat: 68, math: 70, phy: 69, surv: 71 }, subjectAttendance: { mech: 74, mat: 70, math: 73, phy: 71, surv: 72 } },
                        { name: 'Kavya Murthy', progress: 85, attendance: 89, scores: { mech: 87, mat: 83, math: 85, phy: 84, surv: 86 }, subjectAttendance: { mech: 91, mat: 87, math: 90, phy: 88, surv: 89 } },
                        { name: 'Aditya Reddy', progress: 78, attendance: 81, scores: { mech: 80, mat: 76, math: 78, phy: 77, surv: 79 }, subjectAttendance: { mech: 83, mat: 79, math: 82, phy: 80, surv: 81 } }
                    ]
                },
                Mechanical: {
                    name: 'Mechanical Engineering',
                    teachers: [
                        { name: 'Dr. Vinod Kumar', subject: 'Engineering Drawing', email: 'vinod@school.com' },
                        { name: 'Prof. Radha Krishna', subject: 'Workshop Practice', email: 'radha@school.com' },
                        { name: 'Dr. Mahesh Babu', subject: 'Mathematics-I', email: 'mahesh@school.com' },
                        { name: 'Prof. Sita Devi', subject: 'Physics', email: 'sita@school.com' },
                        { name: 'Dr. Kishore Kumar', subject: 'Thermodynamics', email: 'kishore@school.com' }
                    ],
                    students: [
                        { name: 'Sanjay Kumar', progress: 81, attendance: 84, scores: { draw: 83, work: 79, math: 81, phy: 80, therm: 82 }, subjectAttendance: { draw: 86, work: 82, math: 85, phy: 83, therm: 84 } },
                        { name: 'Archana Singh', progress: 87, attendance: 91, scores: { draw: 89, work: 85, math: 87, phy: 86, therm: 88 }, subjectAttendance: { draw: 93, work: 89, math: 92, phy: 90, therm: 91 } },
                        { name: 'Prakash Rao', progress: 74, attendance: 76, scores: { draw: 76, work: 72, math: 74, phy: 73, therm: 75 }, subjectAttendance: { draw: 78, work: 74, math: 77, phy: 75, therm: 76 } },
                        { name: 'Swati Pillai', progress: 83, attendance: 86, scores: { draw: 85, work: 81, math: 83, phy: 82, therm: 84 }, subjectAttendance: { draw: 88, work: 84, math: 87, phy: 85, therm: 86 } },
                        { name: 'Naveen Reddy', progress: 79, attendance: 82, scores: { draw: 81, work: 77, math: 79, phy: 78, therm: 80 }, subjectAttendance: { draw: 84, work: 80, math: 83, phy: 81, therm: 82 } }
                    ]
                },
                Electrical: {
                    name: 'Electrical Engineering',
                    teachers: [
                        { name: 'Dr. Srinivas Rao', subject: 'Circuit Theory', email: 'srinivas@school.com' },
                        { name: 'Prof. Lakshmi Devi', subject: 'Electrical Machines', email: 'lakshmi@school.com' },
                        { name: 'Dr. Ravi Kumar', subject: 'Mathematics-I', email: 'ravi@school.com' },
                        { name: 'Prof. Geetha Nair', subject: 'Physics', email: 'geetha@school.com' },
                        { name: 'Dr. Prasad Reddy', subject: 'Power Systems', email: 'prasad@school.com' }
                    ],
                    students: [
                        { name: 'Karthik Menon', progress: 84, attendance: 88, scores: { circ: 86, mach: 82, math: 84, phy: 83, pow: 85 }, subjectAttendance: { circ: 90, mach: 86, math: 89, phy: 87, pow: 88 } },
                        { name: 'Divya Kumar', progress: 89, attendance: 93, scores: { circ: 91, mach: 87, math: 89, phy: 88, pow: 90 }, subjectAttendance: { circ: 95, mach: 91, math: 94, phy: 92, pow: 93 } },
                        { name: 'Arun Pillai', progress: 77, attendance: 79, scores: { circ: 79, mach: 75, math: 77, phy: 76, pow: 78 }, subjectAttendance: { circ: 81, mach: 77, math: 80, phy: 78, pow: 79 } },
                        { name: 'Preethi Singh', progress: 85, attendance: 89, scores: { circ: 87, mach: 83, math: 85, phy: 84, pow: 86 }, subjectAttendance: { circ: 91, mach: 87, math: 90, phy: 88, pow: 89 } },
                        { name: 'Suresh Babu', progress: 80, attendance: 83, scores: { circ: 82, mach: 78, math: 80, phy: 79, pow: 81 }, subjectAttendance: { circ: 85, mach: 81, math: 84, phy: 82, pow: 83 } }
                    ]
                }
            },
            secondYear: {
                CSE: {
                    name: 'Computer Science Engineering',
                    teachers: [
                        { name: 'Dr. Harish Patel', subject: 'Object Oriented Programming', email: 'harish@school.com' },
                        { name: 'Prof. Sunita Rao', subject: 'Algorithms', email: 'sunita@school.com' },
                        { name: 'Dr. Mohan Kumar', subject: 'Mathematics-II', email: 'mohan@school.com' },
                        { name: 'Prof. Rekha Singh', subject: 'Operating Systems', email: 'rekha@school.com' },
                        { name: 'Dr. Sandeep Joshi', subject: 'Computer Organization', email: 'sandeep@school.com' }
                    ],
                    students: [
                        { name: 'Akash Mehta', progress: 87, attendance: 91, scores: { oop: 89, algo: 85, math: 87, os: 88, co: 86 }, subjectAttendance: { oop: 93, algo: 89, math: 92, os: 90, co: 91 } },
                        { name: 'Sakshi Verma', progress: 93, attendance: 97, scores: { oop: 96, algo: 91, math: 93, os: 94, co: 92 }, subjectAttendance: { oop: 99, algo: 96, math: 98, os: 97, co: 95 } },
                        { name: 'Nikhil Sharma', progress: 79, attendance: 81, scores: { oop: 77, algo: 81, math: 79, os: 78, co: 80 }, subjectAttendance: { oop: 83, algo: 80, math: 82, os: 79, co: 81 } },
                        { name: 'Megha Iyer', progress: 90, attendance: 93, scores: { oop: 92, algo: 88, math: 90, os: 91, co: 89 }, subjectAttendance: { oop: 95, algo: 91, math: 94, os: 93, co: 92 } },
                        { name: 'Varun Reddy', progress: 84, attendance: 87, scores: { oop: 82, algo: 86, math: 84, os: 83, co: 85 }, subjectAttendance: { oop: 89, algo: 86, math: 88, os: 85, co: 87 } }
                    ]
                },
                IT: {
                    name: 'Information Technology',
                    teachers: [
                        { name: 'Dr. Ramesh Nair', subject: 'Java Programming', email: 'ramesh2@school.com' },
                        { name: 'Prof. Vidya Pillai', subject: 'Software Engineering', email: 'vidya@school.com' },
                        { name: 'Dr. Gopal Krishna', subject: 'Mathematics-II', email: 'gopal@school.com' },
                        { name: 'Prof. Asha Kumari', subject: 'Computer Graphics', email: 'asha@school.com' },
                        { name: 'Dr. Vijay Kumar', subject: 'System Programming', email: 'vijay@school.com' }
                    ],
                    students: [
                        { name: 'Ritika Patel', progress: 88, attendance: 90, scores: { java: 90, se: 86, math: 88, cg: 87, sp: 89 }, subjectAttendance: { java: 92, se: 88, math: 91, cg: 89, sp: 90 } },
                        { name: 'Aditya Singh', progress: 82, attendance: 84, scores: { java: 84, se: 80, math: 82, cg: 81, sp: 83 }, subjectAttendance: { java: 86, se: 82, math: 85, cg: 83, sp: 84 } },
                        { name: 'Shruti Desai', progress: 91, attendance: 95, scores: { java: 93, se: 89, math: 91, cg: 92, sp: 90 }, subjectAttendance: { java: 97, se: 94, math: 96, cg: 93, sp: 95 } },
                        { name: 'Rohit Pandey', progress: 76, attendance: 77, scores: { java: 78, se: 74, math: 76, cg: 75, sp: 77 }, subjectAttendance: { java: 79, se: 75, math: 78, cg: 76, sp: 77 } },
                        { name: 'Anjali Rao', progress: 86, attendance: 89, scores: { java: 88, se: 84, math: 86, cg: 85, sp: 87 }, subjectAttendance: { java: 91, se: 87, math: 90, cg: 88, sp: 89 } }
                    ]
                },
                Civil: {
                    name: 'Civil Engineering',
                    teachers: [
                        { name: 'Dr. Krishna Pillai', subject: 'Structural Analysis', email: 'krishna@school.com' },
                        { name: 'Prof. Shanti Menon', subject: 'Concrete Technology', email: 'shanti@school.com' },
                        { name: 'Dr. Ganesh Reddy', subject: 'Mathematics-II', email: 'ganesh@school.com' },
                        { name: 'Prof. Uma Nair', subject: 'Fluid Mechanics', email: 'uma@school.com' },
                        { name: 'Dr. Balaji Kumar', subject: 'Geotechnical Engineering', email: 'balaji@school.com' }
                    ],
                    students: [
                        { name: 'Kiran Nair', progress: 78, attendance: 82, scores: { sa: 80, ct: 76, math: 78, fm: 77, ge: 79 }, subjectAttendance: { sa: 84, ct: 80, math: 83, fm: 81, ge: 82 } },
                        { name: 'Sneha Iyer', progress: 84, attendance: 88, scores: { sa: 86, ct: 82, math: 84, fm: 83, ge: 85 }, subjectAttendance: { sa: 90, ct: 86, math: 89, fm: 87, ge: 88 } },
                        { name: 'Manoj Shankar', progress: 72, attendance: 74, scores: { sa: 74, ct: 70, math: 72, fm: 71, ge: 73 }, subjectAttendance: { sa: 76, ct: 72, math: 75, fm: 73, ge: 74 } },
                        { name: 'Priya Murthy', progress: 87, attendance: 91, scores: { sa: 89, ct: 85, math: 87, fm: 86, ge: 88 }, subjectAttendance: { sa: 93, ct: 89, math: 92, fm: 90, ge: 91 } },
                        { name: 'Rajesh Reddy', progress: 80, attendance: 83, scores: { sa: 82, ct: 78, math: 80, fm: 79, ge: 81 }, subjectAttendance: { sa: 85, ct: 81, math: 84, fm: 82, ge: 83 } }
                    ]
                },
                Mechanical: {
                    name: 'Mechanical Engineering',
                    teachers: [
                        { name: 'Dr. Anil Kumar', subject: 'Machine Design', email: 'anil@school.com' },
                        { name: 'Prof. Kamala Krishna', subject: 'Manufacturing Processes', email: 'kamala@school.com' },
                        { name: 'Dr. Suresh Babu', subject: 'Mathematics-II', email: 'suresh2@school.com' },
                        { name: 'Prof. Padma Devi', subject: 'Heat Transfer', email: 'padma@school.com' },
                        { name: 'Dr. Ranjit Kumar', subject: 'Mechanics of Materials', email: 'ranjit@school.com' }
                    ],
                    students: [
                        { name: 'Deepak Kumar', progress: 83, attendance: 86, scores: { md: 85, mp: 81, math: 83, ht: 82, mm: 84 }, subjectAttendance: { md: 88, mp: 84, math: 87, ht: 85, mm: 86 } },
                        { name: 'Poornima Singh', progress: 89, attendance: 93, scores: { md: 91, mp: 87, math: 89, ht: 88, mm: 90 }, subjectAttendance: { md: 95, mp: 91, math: 94, ht: 92, mm: 93 } },
                        { name: 'Ramesh Rao', progress: 75, attendance: 78, scores: { md: 77, mp: 73, math: 75, ht: 74, mm: 76 }, subjectAttendance: { md: 80, mp: 76, math: 79, ht: 77, mm: 78 } },
                        { name: 'Kavitha Pillai', progress: 85, attendance: 88, scores: { md: 87, mp: 83, math: 85, ht: 84, mm: 86 }, subjectAttendance: { md: 90, mp: 86, math: 89, ht: 87, mm: 88 } },
                        { name: 'Santosh Reddy', progress: 81, attendance: 84, scores: { md: 83, mp: 79, math: 81, ht: 80, mm: 82 }, subjectAttendance: { md: 86, mp: 82, math: 85, ht: 83, mm: 84 } }
                    ]
                },
                Electrical: {
                    name: 'Electrical Engineering',
                    teachers: [
                        { name: 'Dr. Venkat Rao', subject: 'Control Systems', email: 'venkat@school.com' },
                        { name: 'Prof. Sarala Devi', subject: 'Electrical Measurements', email: 'sarala@school.com' },
                        { name: 'Dr. Murali Kumar', subject: 'Mathematics-II', email: 'murali@school.com' },
                        { name: 'Prof. Bharati Nair', subject: 'Electromagnetic Theory', email: 'bharati@school.com' },
                        { name: 'Dr. Narayana Reddy', subject: 'Analog Electronics', email: 'narayana@school.com' }
                    ],
                    students: [
                        { name: 'Sameer Menon', progress: 86, attendance: 90, scores: { cs: 88, em: 84, math: 86, emt: 85, ae: 87 }, subjectAttendance: { cs: 92, em: 88, math: 91, emt: 89, ae: 90 } },
                        { name: 'Nandini Kumar', progress: 91, attendance: 95, scores: { cs: 93, em: 89, math: 91, emt: 90, ae: 92 }, subjectAttendance: { cs: 97, em: 93, math: 96, emt: 94, ae: 95 } },
                        { name: 'Prakash Pillai', progress: 79, attendance: 81, scores: { cs: 81, em: 77, math: 79, emt: 78, ae: 80 }, subjectAttendance: { cs: 83, em: 79, math: 82, emt: 80, ae: 81 } },
                        { name: 'Lakshmi Singh', progress: 87, attendance: 91, scores: { cs: 89, em: 85, math: 87, emt: 86, ae: 88 }, subjectAttendance: { cs: 93, em: 89, math: 92, emt: 90, ae: 91 } },
                        { name: 'Chandan Babu', progress: 82, attendance: 85, scores: { cs: 84, em: 80, math: 82, emt: 81, ae: 83 }, subjectAttendance: { cs: 87, em: 83, math: 86, emt: 84, ae: 85 } }
                    ]
                }
            }
        };

        let currentModalType = '';
        let currentYear = '';
        let currentBranch = '';
        let charts = {
            firstYear: {},
            secondYear: {}
        };

        function showSection(section) {
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.getElementById(section).classList.add('active');
            event.target.classList.add('active');

            if (section === 'teachers') loadTeachers();
            if (section === 'hods') loadHODs();
            if (section === 'departments') {
                loadDepartments();
                renderBranchCards();
            }
            if (section === 'reports') loadReportDepartments();

            // Close mobile menu after selection
            if (window.innerWidth <= 768) {
                document.getElementById('dashboard').classList.remove('mobile-menu-open');
            }
        }

        function showYear(year) {
            document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.year-content').forEach(c => c.classList.remove('active'));

            event.target.classList.add('active');
            if (year === 'firstYear') {
                document.getElementById('firstYearContent').classList.add('active');
            } else {
                document.getElementById('secondYearContent').classList.add('active');
            }
        }

        function renderBranchCards() {
            const branches = ['CSE', 'IT', 'Civil', 'Mechanical', 'Electrical'];
            const icons = {
                'CSE': '🖥️',
                'IT': '💻',
                'Civil': '🏗️',
                'Mechanical': '⚙️',
                'Electrical': '⚡'
            };

            const firstYearContainer = document.getElementById('firstYearBranches');
            firstYearContainer.innerHTML = '';
            branches.forEach(branch => {
                const branchData = data.firstYear[branch];
                const avgProgress = Math.round(branchData.students.reduce((sum, s) => sum + s.progress, 0) / branchData.students.length);
                firstYearContainer.innerHTML += `
 <div class="branch-card" onclick="showBranchDetails('firstYear', '${branch}')">
 <h3>${icons[branch]} ${branchData.name}</h3>
 <p>Students: ${branchData.students.length}</p>
 <p>Teachers: ${branchData.teachers.length}</p>
 <p>Avg Progress: ${avgProgress}%</p>
 </div>
 `;
            });

            const secondYearContainer = document.getElementById('secondYearBranches');
            secondYearContainer.innerHTML = '';
            branches.forEach(branch => {
                const branchData = data.secondYear[branch];
                const avgProgress = Math.round(branchData.students.reduce((sum, s) => sum + s.progress, 0) / branchData.students.length);
                secondYearContainer.innerHTML += `
 <div class="branch-card" onclick="showBranchDetails('secondYear', '${branch}')">
 <h3>${icons[branch]} ${branchData.name}</h3>
 <p>Students: ${branchData.students.length}</p>
 <p>Teachers: ${branchData.teachers.length}</p>
 <p>Avg Progress: ${avgProgress}%</p>
 </div>
 `;
            });
        }

        function showBranchDetails(year, branch) {
            currentYear = year;
            currentBranch = branch;

            const branchData = data[year][branch];

            // Hide branch list and show detail view
            document.getElementById(`${year}BranchList`).style.display = 'none';
            document.getElementById(`${year}BranchDetail`).style.display = 'block';

            // Set branch title
            document.getElementById(`${year}BranchTitle`).textContent = branchData.name;

            // Load teachers table
            const teachersTable = document.querySelector(`#${year}TeachersTable tbody`);
            teachersTable.innerHTML = '';
            branchData.teachers.forEach(teacher => {
                teachersTable.innerHTML += `
 <tr>
 <td>${teacher.name}</td>
 <td>${teacher.subject}</td>
 <td>${teacher.email}</td>
 </tr>
 `;
            });

            // Load student progress
            const progressList = document.getElementById(`${year}ProgressList`);
            progressList.innerHTML = '';
            branchData.students.forEach(student => {
                progressList.innerHTML += `
 <div class="progress-item">
 <h4>${student.name}</h4>
 <p>Overall Progress: ${student.progress}% | Attendance: ${student.attendance}%</p>
 <div class="progress-bar-container">
 <div class="progress-bar" style="width: ${student.progress}%">${student.progress}%</div>
 </div>
 </div>
 `;
            });

            // Render charts
            renderProgressChart(year, branchData);
            renderAttendanceChart(year, branchData);
            renderSubjectChart(year, branchData);
            renderSubjectAttendanceChart(year, branchData);
        }

        function backToBranchList(year) {
            document.getElementById(`${year}BranchList`).style.display = 'block';
            document.getElementById(`${year}BranchDetail`).style.display = 'none';

            // Destroy existing charts
            if (charts[year].progress) charts[year].progress.destroy();
            if (charts[year].attendance) charts[year].attendance.destroy();
            if (charts[year].subject) charts[year].subject.destroy();
            if (charts[year].subjectAttendance) charts[year].subjectAttendance.destroy();
        }

        function renderProgressChart(year, branchData) {
            const ctx = document.getElementById(`${year}ProgressChart`);

            if (charts[year].progress) {
                charts[year].progress.destroy();
            }

            charts[year].progress = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: branchData.students.map(s => s.name),
                    datasets: [{
                        label: 'Progress (%)',
                        data: branchData.students.map(s => s.progress),
                        backgroundColor: 'rgba(102, 126, 234, 0.8)',
                        borderColor: 'rgba(102, 126, 234, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        function renderAttendanceChart(year, branchData) {
            const ctx = document.getElementById(`${year}AttendanceChart`);

            if (charts[year].attendance) {
                charts[year].attendance.destroy();
            }

            charts[year].attendance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: branchData.students.map(s => s.name),
                    datasets: [{
                        label: 'Attendance (%)',
                        data: branchData.students.map(s => s.attendance),
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        function renderSubjectChart(year, branchData) {
            const ctx = document.getElementById(`${year}SubjectChart`);

            if (charts[year].subject) {
                charts[year].subject.destroy();
            }

            // Get all subject keys from first student
            const subjects = Object.keys(branchData.students[0].scores);

            // Calculate average scores for each subject
            const avgScores = subjects.map(subject => {
                const total = branchData.students.reduce((sum, student) => sum + student.scores[subject], 0);
                return Math.round(total / branchData.students.length);
            });

            charts[year].subject = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: subjects.map(s => s.toUpperCase()),
                    datasets: [{
                        label: 'Average Scores',
                        data: avgScores,
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(245, 158, 11, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        function renderSubjectAttendanceChart(year, branchData) {
            const ctx = document.getElementById(`${year}SubjectAttendanceChart`);

            if (charts[year].subjectAttendance) {
                charts[year].subjectAttendance.destroy();
            }

            // Get all subject keys from first student's attendance
            const subjects = Object.keys(branchData.students[0].subjectAttendance);

            // Calculate average attendance for each subject
            const avgAttendance = subjects.map(subject => {
                const total = branchData.students.reduce((sum, student) => sum + student.subjectAttendance[subject], 0);
                return Math.round(total / branchData.students.length);
            });

            charts[year].subjectAttendance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: subjects.map(s => s.toUpperCase()),
                    datasets: [{
                        label: 'Average Attendance (%)',
                        data: avgAttendance,
                        backgroundColor: 'rgba(139, 92, 246, 0.8)',
                        borderColor: 'rgba(139, 92, 246, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        function loadTeachers() {
            const tbody = document.querySelector('#teachersTable tbody');
            tbody.innerHTML = '';
            data.teachers.forEach(teacher => {
                tbody.innerHTML += `
 <tr>
 <td>${teacher.id}</td>
 <td>${teacher.name}</td>
 <td>${teacher.email}</td>
 <td>${teacher.department}</td>
 <td>
 <div class="action-btns">
 <button class="btn btn-warning" onclick="editUser('teacher', ${teacher.id})">Edit</button>
 <button class="btn btn-danger" onclick="deleteUser('teacher', ${teacher.id})">Delete</button>
 </div>
 </td>
 </tr>
 `;
            });
        }

        function loadHODs() {
            const tbody = document.querySelector('#hodsTable tbody');
            tbody.innerHTML = '';
            data.hods.forEach(hod => {
                tbody.innerHTML += `
 <tr>
 <td>${hod.id}</td>
 <td>${hod.name}</td>
 <td>${hod.email}</td>
 <td>${hod.department}</td>
 <td>
 <div class="action-btns">
 <button class="btn btn-warning" onclick="editUser('hod', ${hod.id})">Edit</button>
 <button class="btn btn-danger" onclick="deleteUser('hod', ${hod.id})">Delete</button>
 </div>
 </td>
 </tr>
 `;
            });
        }

        function loadDepartments() {
            const tbody = document.querySelector('#departmentsTable tbody');
            tbody.innerHTML = '';
            data.departments.forEach(dept => {
                tbody.innerHTML += `
 <tr>
 <td>${dept.id}</td>
 <td>${dept.name}</td>
 <td>${dept.hod}</td>
 <td>${dept.teachers}</td>
 <td>
 <div class="action-btns">
 <button class="btn btn-warning" onclick="editUser('department', ${dept.id})">Edit</button>
 <button class="btn btn-danger" onclick="deleteUser('department', ${dept.id})">Delete</button>
 </div>
 </td>
 </tr>
 `;
            });
        }

        function loadReportDepartments() {
            const select = document.getElementById('reportDept');
            select.innerHTML = '<option value="">-- Select Department --</option>';
            data.departments.forEach(dept => {
                select.innerHTML += `<option value="${dept.name}">${dept.name}</option>`;
            });
        }

        function loadDepartmentReport() {
            const deptName = document.getElementById('reportDept').value;
            const reportContent = document.getElementById('reportContent');

            if (!deptName) {
                reportContent.innerHTML = '';
                return;
            }

            const dept = data.departments.find(d => d.name === deptName);
            const deptTeachers = data.teachers.filter(t => t.department === deptName);

            reportContent.innerHTML = `
 <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
 <h3>${deptName} Department Report</h3>
 <div style="margin-top: 20px;">
 <p><strong>HOD:</strong> ${dept.hod}</p>
 <p><strong>Total Teachers:</strong> ${dept.teachers}</p>
 <p><strong>Active Teachers in System:</strong> ${deptTeachers.length}</p>
 </div>
 <h4 style="margin-top: 30px;">Teachers List</h4>
 <table style="margin-top: 10px;">
 <thead>
 <tr>
 <th>Name</th>
 <th>Email</th>
 </tr>
 </thead>
 <tbody>
 ${deptTeachers.map(t => `
 <tr>
 <td>${t.name}</td>
 <td>${t.email}</td>
 </tr>
 `).join('')}
 </tbody>
 </table>
 </div>
 `;
        }

        function openModal(type) {
            currentModalType = type;
            document.getElementById('userModal').classList.add('active');
            document.getElementById('modalTitle').textContent = `Add ${type.charAt(0).toUpperCase() + type.slice(1)}`;
            document.getElementById('userForm').reset();

            // Populate department dropdown
            if (type !== 'department') {
                const deptSelect = document.getElementById('userDept');
                deptSelect.innerHTML = '';
                data.departments.forEach(dept => {
                    deptSelect.innerHTML += `<option value="${dept.name}">${dept.name}</option>`;
                });
                document.getElementById('deptGroup').style.display = 'block';
            } else {
                document.getElementById('deptGroup').style.display = 'none';
            }
        }

        function closeModal() {
            document.getElementById('userModal').classList.remove('active');
        }

        function editUser(type, id) {
            alert(`Edit ${type} with ID: ${id} - This is a demo feature`);
        }

        function deleteUser(type, id) {
            if (confirm(`Are you sure you want to delete this ${type}?`)) {
                if (type === 'teacher') {
                    data.teachers = data.teachers.filter(t => t.id !== id);
                    loadTeachers();
                } else if (type === 'hod') {
                    data.hods = data.hods.filter(h => h.id !== id);
                    loadHODs();
                } else if (type === 'department') {
                    data.departments = data.departments.filter(d => d.id !== id);
                    loadDepartments();
                }
                alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`);
            }
        }

        document.getElementById('userForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const department = currentModalType !== 'department' ? document.getElementById('userDept').value : '';

            if (currentModalType === 'teacher') {
                const newId = Math.max(...data.teachers.map(t => t.id), 0) + 1;
                data.teachers.push({ id: newId, name, email, department });
                loadTeachers();
            } else if (currentModalType === 'hod') {
                const newId = Math.max(...data.hods.map(h => h.id), 0) + 1;
                data.hods.push({ id: newId, name, email, department });
                loadHODs();
            } else if (currentModalType === 'department') {
                const newId = Math.max(...data.departments.map(d => d.id), 0) + 1;
                data.departments.push({ id: newId, name, hod: 'TBD', teachers: 0 });
                loadDepartments();
            }

            closeModal();
            alert('User added successfully!');
        });

        // Close modal when clicking outside
        document.getElementById('userModal').addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initialize
        window.addEventListener('load', function () {
            renderBranchCards();
        });
    