![monitor](https://github.com/william89731/health2mqtt/assets/68069659/0336580e-7975-4244-9138-863107d840d1)

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


![image](https://github.com/william89731/health2mqtt/assets/68069659/b8aaee3f-8bcd-4470-a91a-b429820ec3e2)

[compose file](https://github.com/william89731/health2mqtt/blob/main/docker-compose.yml), enjoy :)


##### kubernetes environment


![image](https://github.com/william89731/health2mqtt/assets/68069659/c1aeba4d-5819-4c5f-9532-ac7ec413351e)



[here](https://github.com/william89731/health2mqtt/blob/main/h2mqtt.yml) manifest k8s. for 3 machine (bareMetal). one isnstance per node


##### dashboard and notification


![image](https://github.com/william89731/health2mqtt/assets/68069659/25901663-19cd-4cdb-bd36-7ee55f3871fe)


use topics and payloads mqtt for any situations (beatiful dashboard grafana,telegram...)





