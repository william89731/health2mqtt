![monitor](https://github.com/william89731/health2mqtt/assets/68069659/15166c9b-ce95-477c-ac82-64b838055896)


[![platform](https://img.shields.io/badge/platform-kubernetes-blue)](https://kubernetes.io/)
[![os](https://img.shields.io/badge/os-linux-red)](https://www.linux.org/)
[![platform](https://img.shields.io/badge/platform-nodejs-blue)](https://nodejs.org/en/)
[![docker version](https://img.shields.io/badge/docker%20version-20.10-brightgreen)](https://www.docker.com/)
[![license](https://img.shields.io/badge/license-Apache--2.0-yellowgreen)](https://apache.org/licenses/LICENSE-2.0)
[![donate](https://img.shields.io/badge/donate-wango-blue)](https://www.wango.org/donate.aspx)


# health2mqtt
system monitor and push to mqtt.

```requirements:```
- [os linux](https://www.linux.org/pages/download/)
- [lm_sensors](https://wiki.archlinux.org/title/Lm_sensors)  (opzional)
- copy this [script](https://github.com/william89731/health2mqtt/blob/main/health.sh) and put it on crontab

```bash
*/1 * * * * bash ~/health.sh
```

##### Docker environment

![Screenshot from 2023-10-03 17-49-57](https://github.com/william89731/health2mqtt/assets/68069659/ccfbc809-940f-48bd-b66c-98bc06dd9edd)




[compose file](https://github.com/william89731/health2mqtt/blob/main/docker-compose.yml), enjoy :)


##### kubernetes environment


![Screenshot from 2023-10-03 17-53-28](https://github.com/william89731/health2mqtt/assets/68069659/634d96a6-8a89-4d9c-9360-ceefbd3d99e8)




[here](https://github.com/william89731/health2mqtt/blob/main/h2mqtt.yml) manifest k8s. for 3 machine (bareMetal). one isnstance per node


##### dashboard and notification


![Screenshot from 2023-10-03 18-06-37](https://github.com/william89731/health2mqtt/assets/68069659/863301b5-6364-4995-b448-0aeeca23c661)



use topics and payloads mqtt for any situations (beatiful dashboard grafana,telegram...)





