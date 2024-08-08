#Makefile

start-backend:
	cd backend && npm start

start-frontend:
	cd frontend/my-app && npm start

install:
	cd backend && npm install
	cd frontend && npm install
	cd frontend/my-app && npm install