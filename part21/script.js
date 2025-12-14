const featuredPeople = [
  {
    fullName: "Ethan Pollack",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Software Developer",
    description:
      "Full-stack developer who loves building fast, scalable web apps and mentoring junior devs.",
    tags: ["javascript", "react", "node.js", "full-stack", "mentor"]
  },
  {
    fullName: "Amina Shah",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "Product Designer",
    description:
      "Product designer focused on clean interfaces, smooth user journeys, and design systems.",
    tags: ["ui/ux", "product-design", "figma", "design-systems", "accessibility"]
  },
  {
    fullName: "Lucas Meyer",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "Full-Stack Engineer",
    description:
      "Engineer who bridges frontend and backend to ship production-ready features quickly.",
    tags: ["full-stack", "typescript", "next.js", "api-design", "devops"]
  },
  {
    fullName: "Priya Desai",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "Marketing Strategist",
    description:
      "Growth-focused marketer who blends storytelling, analytics, and experimentation.",
    tags: ["marketing", "growth", "content", "social-media", "analytics"]
  },
  {
    fullName: "Henry Park",
    image:
      "https://images.unsplash.com/photo-1543084951-1650d1468e2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "Project Manager",
    description:
      "Project manager who keeps cross-functional teams aligned, on time, and unblocked.",
    tags: ["management", "scrum", "agile", "communication", "planning"]
  },
  {
    fullName: "Isabella Rossi",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "Data Scientist",
    description:
      "Data scientist turning messy datasets into clear insights, dashboards, and models.",
    tags: ["data-science", "python", "machine-learning", "dashboards", "analytics"]
  }
];

var sum = '';
featuredPeople.forEach(function(elem) {
  sum += ` <div class="card">
    <img src="${elem.image}" alt="">
    <h2>${elem.fullName}</h2>
    <h3>${elem.profession}</h3>
    <h4>${elem.description}</h4>
  </div>`;
  console.log(sum);
  var main = document.querySelector('main');
  main.innerHTML = sum;

});

