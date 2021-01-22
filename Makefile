up:
	docker-compose up

install-front:
	docker-compose run front yarn

install-back:
	docker-compose run back yarn

install:
	make install-front
	make install-back
