From node
ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3000
WORKDIR C:\Users\mjd05\Desktop\COVID-Tracker\covid-tracker
ADD package.json C:\Users\mjd05\Desktop\COVID-Tracker\covid-tracker
RUN npm i --production
ADD . C:\Users\mjd05\Desktop\COVID-Tracker\covid-tracker
ENTRYPOINT ["npm", "start"]