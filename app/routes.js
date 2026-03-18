//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Logging session data  
  
  router.use((req, res, next) => {    
      const log = {  
        method: req.method,  
        url: req.originalUrl,  
        data: req.session.data  
      }  
      console.log(JSON.stringify(log, null, 2))  
     
    next()  
  }) 

// Add your routes here

//Iteration 2

// Remove fuel redirect for M20i
router.post('/remove-fuel20', function(request, response) {

	var fuelDecision = request.session.data['removeFuel']
	if (fuelDecision == "Yes"){
		response.redirect("admin/iteration-2/1084/M20i/add-fuel.html")
	} else {
		response.redirect("admin/iteration-2/1084/M20i/permitted-fuel.html")
	}
})

// Remove fuel redirect for M40i
router.post('/remove-fuel40', function(request, response) {

	var fuelDecision = request.session.data['removeFuel']
	if (fuelDecision == "Yes"){
		response.redirect("admin/iteration-2/1084/M40i/add-fuel.html")
	} else {
		response.redirect("admin/iteration-2/1084/M40i/permitted-fuel.html")
	}
})

// Remove fuel redirect for M60i
router.post('/remove-fuel60', function(request, response) {

	var fuelDecision = request.session.data['removeFuel']
	if (fuelDecision == "Yes"){
		response.redirect("admin/iteration-2/1084/M60i/add-fuel.html")
	} else {
		response.redirect("admin/iteration-2/1084/M60i/permitted-fuel.html")
	}
})
// Remove fuel redirect for M80i
router.post('/remove-fuel', function(request, response) {

	var fuelDecision = request.session.data['removeFuel']
	if (fuelDecision == "Yes"){
		response.redirect("admin/iteration-2/1084/M80i/add-fuel.html")
	} else {
		response.redirect("admin/iteration-2/1084/M80i/permitted-fuel.html")
	}
})
